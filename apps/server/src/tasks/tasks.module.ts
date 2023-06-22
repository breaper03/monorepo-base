import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksSchema } from 'src/Schema/tasks.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Tasks', schema: TasksSchema }])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
