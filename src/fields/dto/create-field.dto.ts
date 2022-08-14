import { ApiProperty } from '@nestjs/swagger';

export class CreateFieldDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
