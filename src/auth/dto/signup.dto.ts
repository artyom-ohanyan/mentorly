import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignupDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  position: string;

  @ApiProperty()
  field: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  education: string;
  @ApiProperty()
  experience: string;

  @ApiProperty()
  about: string;

  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
