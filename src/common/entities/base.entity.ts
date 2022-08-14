import { ApiProperty } from '@nestjs/swagger';

export abstract class BaseEntity {
  id: number;
  @ApiProperty()
  published: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
