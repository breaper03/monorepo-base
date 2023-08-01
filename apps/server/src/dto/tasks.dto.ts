import { IsString, MinLength, IsOptional, IsNumber, IsDate } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Types } from "mongoose";
export class CreateTaskDto {
    @IsString()
    @ApiProperty({type: String})
    name: string;

    @IsString()
    @MinLength(3)
    @ApiProperty({type: String})
    description: string;

    @IsString()
    @MinLength(3)
    @ApiProperty({type: String})
    type: string;

    @IsNumber()
    @ApiProperty({type: Number})
    price: number

    @IsString()
    @MinLength(3)
    @ApiProperty({type: String})
    currency: string

    @IsDate()
    @ApiProperty({type: Date})
    dateFrom: Date
    
    @IsDate()
    @ApiProperty({type: Date})
    dateTo: Date

    @IsString()
    @ApiProperty({type: String})
    userId: string
}
export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    @ApiProperty({type: String})
    name?: string;

    @IsString()
    @MinLength(3)
    @IsOptional()
    @ApiProperty({type: String})
    description?: string;

    @IsString()
    @MinLength(3)
    @ApiProperty({type: String})
    type: string;

    @IsNumber()
    @IsOptional()
    @ApiProperty({type: Number})
    price?: number

    @IsString()
    @MinLength(3)
    @ApiProperty({type: String})
    currency?: string

    @IsDate()
    @ApiProperty({type: Date})
    dateFrom?: Date
    
    @IsDate()
    @ApiProperty({type: Date})
    dateTo?: Date

    @IsString()
    @IsOptional()
    @ApiProperty({type: String})
    userId?: string
}