import { fields } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../common/entities/base.entity';

export class FieldEntity extends BaseEntity implements fields {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;
}
