import { ApiProperty } from '@nestjs/swagger';

export class SearchUserDto {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  surname?: string;

  @ApiProperty()
  type?: string;

  @ApiProperty()
  createdAt?: Date;
}
