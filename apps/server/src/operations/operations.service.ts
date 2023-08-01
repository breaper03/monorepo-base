import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { Operations } from 'src/Schema/operations.schema';
import { CreateOperationDto, UpdateOperationDto } from 'src/dto/operations.dto';

@Injectable()
export class OperationsService {
  constructor(@InjectModel(Operations.name) private operationsModel: Model<Operations>) {}
  create(createOperationDto: CreateOperationDto) {
    const newOperation = new this.operationsModel(createOperationDto)
    return newOperation.save()
  }

  findAll() {
    return this.operationsModel.find()
  }

  findOne(_id: string) {
    return this.operationsModel.findById(_id)
  }

  update(_id: string, updateOperationDto: UpdateOperationDto) {
    return this.operationsModel.findByIdAndUpdate(_id, updateOperationDto)
  }

  remove(_id: string) {
    return this.operationsModel.findByIdAndDelete(_id)
  }
}
