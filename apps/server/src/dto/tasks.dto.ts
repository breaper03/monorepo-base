import { IsString, MinLength, IsOptional, IsNumber } from "@nestjs/class-validator";
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
    @IsOptional()
    @MinLength(3)
    @ApiProperty({type: String})
    place?: string

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
    @IsOptional()
    @MinLength(3)
    @ApiProperty({type: String})
    place?: string

    @IsString()
    @IsOptional()
    @ApiProperty({type: String})
    userId?: string
}