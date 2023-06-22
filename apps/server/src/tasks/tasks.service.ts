import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tasks } from 'src/Schema/tasks.schema';
import { CreateTaskDto, UpdateTaskDto } from 'src/dto/tasks.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Tasks.name) private tasksModel: Model<Tasks>) {}

  findAllTasks() {
    return this.tasksModel.find()
  }

  async findTaskByUserId(userId: string) {
    const tasks = await this.tasksModel.find()
    return tasks.filter((task: Tasks) => task.userId === userId)
  }

  findOneTasks(_id: string) {
    return this.tasksModel.findById(_id)
  }

  createTasks(createTaskDto: CreateTaskDto) {
    const newTasks = new this.tasksModel(createTaskDto)
    return newTasks.save()
  }

  updateTasks(_id: string, task: UpdateTaskDto) {
    return this.tasksModel.findByIdAndUpdate(_id, task)
  }

  removeTasks(_id: string) {
    return this.tasksModel.findByIdAndDelete(_id)
  }
}
