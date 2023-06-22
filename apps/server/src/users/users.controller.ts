import { Body, Controller, Delete, Get, HttpCode, Ip, Logger, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { createUserDto, updateUserDto } from 'src/dto/users.dto';


@Controller('users')
@ApiTags('Users')

export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  private readonly logger = new Logger(UsersController.name);

  @Get()
  getUsers() {
    return this.usersService.getUser() 
  }

  @Get(':id')
  getUserById(_id: any) {
    return this.usersService.getUserById(_id)
  }

  @ApiOperation({ summary: 'Create User' })
  @Post('/create')
  createUser(@Body() user: createUserDto, @Ip() ip) {
    return this.usersService.createUser({...user, signed: ip})
  }

  @ApiOperation({ summary: 'Update User' })
  @Put('/update/:id')
  // {"title": "hola", "description": "test", "done": true}'
  async update(@Param('id') id: any, @Body() user: updateUserDto, @Ip() ip) {
    this.logger.log(`El ip del usuario es (${ip}).`)
    const userAuth = await this.usersService.updateUser(id, {...user, signed: ip});
    if (!userAuth) {
      throw new NotFoundException('User Not Found')
    } else {
      return userAuth
    }
  }

  @ApiOperation({ summary: 'Delete User' })
  @Delete('/delete/:id')
  @HttpCode(204)
  async deleteUser(@Param('id') id: any) {
    const user = await this.usersService.deleteUser(id);
    if (!user) {
      throw new NotFoundException('User Not Found')
    } else {
      return user
    }
  }

  @ApiOperation({summary: 'login user with validation'})
  @Put('/login')
  async login(@Ip() ip: string, @Body() user: updateUserDto) {
    this.logger.log(`El ip del usuario es (${ip}).`)

    const {name, password, _id} = (await this.getUsers()).find(res => res.name === user.name)
    const obj = {name: name, password: password, signed: ip, token: (_id + Math.random().toString())};

    const auth = [(await this.getUsers()).some(res => res.name == obj.name), (await this.getUsers()).some(res => res.password == obj.password)]

    if(auth[0] === true && auth[1] === true) {
      const userAuth = await this.usersService.logInOut(_id, obj);
      return userAuth
    } else {
      throw new NotFoundException('User Not Found')
      // return {message:'Los datos no coinciden con ningun usuario o son incorrecto verifique por favor'}
    }
    
  }

  @ApiOperation({summary: 'login user with validation'})
  @Put('/logOut')
  async logOut(@Body() user: updateUserDto) {
    const obj = {name: user.name, password: user.password, signed: ''};
    const auth = [(await this.getUsers()).some(res => res.name == obj.name), (await this.getUsers()).some(res => res.password == obj.password)]

    if(auth[0] === true && auth[1] === true) {
      const currentUser = (await this.getUsers()).find(res => res.name === obj.name)
      const userAuth = await this.usersService.logInOut(currentUser._id, currentUser);
      return userAuth
    }
  }
}
