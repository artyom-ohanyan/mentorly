import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateUserDto {
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

  @IsString()
  @ApiProperty()
  position: string;

  @IsNumber()
  @ApiProperty()
  field: number;

  @IsString()
  @ApiProperty()
  description: string;

  @IsString()
  @ApiProperty()
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
