import { ApiProperty, PartialType } from '@nestjs/swagger';

export class UpdateUserDto {
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
