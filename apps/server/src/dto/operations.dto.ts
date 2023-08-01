import { IsDate, IsNumber } from "@nestjs/class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CreateOperationDto {
  @IsNumber()
  @ApiProperty({type: Number})
  initialMount: number

  @IsDate()
  @ApiProperty({type: Date})
  date: Date

  @IsNumber()
  @ApiProperty({type: Number})
  gainLose: number

  @IsNumber()
  @ApiProperty({type: Number})
  lote: number

}

export class UpdateOperationDto {
  @IsNumber()
  @ApiProperty({type: Number})
  initialMount?: number

  @IsDate()
  @ApiProperty({type: Date})
  date?: Date

  @IsNumber()
  @ApiProperty({type: Number})
  gainLose?: number

  @IsNumber()
  @ApiProperty({type: Number})
  lote?: number

}