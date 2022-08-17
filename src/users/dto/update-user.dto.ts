import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  surname: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  type: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  position: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  field: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  description: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  education: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  experience: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  about: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
