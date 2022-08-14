import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateFieldDto } from '../dto/create-field.dto';
import { UpdateFieldDto } from '../dto/update-field.dto';

@Injectable()
export class FieldsRepository {
  constructor(private prisma: PrismaService) {}
  create(createFieldDto: CreateFieldDto) {
    return this.prisma.fields.create({ data: createFieldDto });
  }
  findAll() {
    return this.prisma.fields.findMany({ where: { published: true } });
  }
  findOne(id: number) {
    return this.prisma.fields.findUnique({
      where: { id: id },
    });
  }
  update(id: number, updateFieldDto: UpdateFieldDto) {
    return this.prisma.fields.update({
      where: { id },
      data: updateFieldDto,
    });
  }

  remove(id: number) {
    return this.prisma.fields.delete({ where: { id } });
  }
}
