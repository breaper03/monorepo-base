import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from 'src/dto/tasks.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
@Controller('tasks')
@ApiTags('Tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @ApiOperation({summary: 'Obterner todas las tareas'})
  @Get()
  findAll() {
    return this.tasksService.findAllTasks();
  }

  @ApiOperation({summary: 'Obtener las tareas de un usuario por id'})
  @Get(':userId')
  findByUserId(@Param('userId') id: string) {
    return this.tasksService.findTaskByUserId(id);
  }

  @ApiOperation({summary: 'Obtener una tarea por id'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOneTasks(id);
  }

  @ApiBody({type: CreateTaskDto})
  @ApiOperation({summary: 'Crear Tarea'})
  @Post('/create')
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTasks(createTaskDto);
  }

  @ApiBody({type: UpdateTaskDto})
  @ApiOperation({summary: 'Editar Tarea'})
  @Put('/update/:id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.updateTasks(id, updateTaskDto);
  }

  @ApiOperation({summary: 'Eliminar Tarea'})
  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.tasksService.removeTasks(id);
  }
}
