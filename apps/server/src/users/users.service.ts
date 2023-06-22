import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Users } from 'src/Schema/users.schema';
import { createUserDto, updateUserDto } from 'src/dto/users.dto';
@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private usersModel: Model<Users>) {}

  getUser() {
    return this.usersModel.find()
  }

  //  {"name":"breaper03", "password":"G1br32l*-"}
  async createUser(user: createUserDto) {
    const newUser = new this.usersModel(user)
    return newUser.save()
  }
  
  getUserById(_id: string) {
    return this.usersModel.findById(_id)
  }
  
  updateUser(_id: string, user: updateUserDto) {
    return this.usersModel.findByIdAndUpdate(_id, user)
  }

  deleteUser(_id: string) {
    return this.usersModel.findByIdAndDelete(_id)
  }

  logInOut(_id: Types.ObjectId, user) {
    return this.usersModel.findByIdAndUpdate(_id, user)
  }
}
