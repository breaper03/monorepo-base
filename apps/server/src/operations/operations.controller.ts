import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { CreateOperationDto, UpdateOperationDto } from 'src/dto/operations.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('operations')
@ApiTags('Operations')
export class OperationsController {
  constructor(private readonly operationsService: OperationsService) {}

  @Post("/create")
  @ApiOperation({summary: "Crear una Operacion"})
  create(@Body() createOperationDto: CreateOperationDto) {
    console.log("createOperationDto", createOperationDto)
    return this.operationsService.create(createOperationDto);
  }

  @Get("")
  @ApiOperation({summary: "Buscar todas las operaciones"})
  findAll() {
    return this.operationsService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: "Obtener una operacion"})
  findOne(@Param('id') id: string) {
    return this.operationsService.findOne(id);
  }

  @Put('/update/:id')
  @ApiOperation({summary: "Editar una operacion"})
  update(@Param('id') id: string, @Body() updateOperationDto: UpdateOperationDto) {
    return this.operationsService.update(id, updateOperationDto);
  }

  @Delete('/delete/:id')
  @ApiOperation({summary: "Eliminar una operacion"})
  remove(@Param('id') id: string) {
    return this.operationsService.remove(id);
  }
}
