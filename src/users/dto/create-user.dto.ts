import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  surname: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  type: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  password: string;

  @ApiProperty()
  @IsString()
  position: string;

  @IsNumber()
  @ApiProperty()
  field: number;

  @ApiProperty()
  @IsString()
  description: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty()
  @IsString()
  education: string;

  @IsString()
  @ApiProperty()
  experience: string;

  @IsString()
  @ApiProperty()
  about: string;

  @IsBoolean()
  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
