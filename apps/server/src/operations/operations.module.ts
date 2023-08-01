import { Module } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { OperationsController } from './operations.controller';
import { OperationsSchema } from 'src/Schema/operations.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Operations', schema: OperationsSchema }])],
  controllers: [OperationsController],
  providers: [OperationsService]
})
export class OperationsModule {}
