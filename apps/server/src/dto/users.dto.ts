import { IsString, MinLength, IsOptional } from "@nestjs/class-validator";

export class createUserDto {
    @IsString()
    @IsOptional()
    userName: string;

    @IsString()
    @MinLength(8)
    @IsOptional()
    password: string;

    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    lastname: string;

    @IsString()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    phone: string;
    
    @IsString()
    @IsOptional()
    signed?: string

    @IsString()
    @IsOptional()
    token?: string
}

export class updateUserDto {
    @IsString()
    @IsOptional()
    userName?: string;

    @IsString()
    @MinLength(8)
    @IsOptional()
    password?: string;

    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    lastname?: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    phone?: string;
    
    @IsString()
    @IsOptional()
    signed?: string

    @IsString()
    @IsOptional()
    token?: string
}