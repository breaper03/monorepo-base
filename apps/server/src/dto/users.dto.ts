import { IsString, MinLength, IsOptional } from "@nestjs/class-validator";
export class createUserDto {
    @IsString()
    name: string;

    @IsString()
    @MinLength(3)
    password: string;

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
    name?: string;

    @IsString()
    @MinLength(3)
    @IsOptional()
    password?: string;
    
    @IsString()
    @IsOptional()
    signed?: string

    @IsString()
    @IsOptional()
    token?: string
}