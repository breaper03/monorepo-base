import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { TasksModule } from './tasks/tasks.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://breaper03:G1br32l*-@cluster0.heeux3z.mongodb.net/money-manager-app'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/dist') 
    }), 
    UsersModule, TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
