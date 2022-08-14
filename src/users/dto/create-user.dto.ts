import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  position: string;

  @ApiProperty()
  field: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  education: string;
  @ApiProperty()
  experience: string;

  @ApiProperty()
  about: string;

  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
