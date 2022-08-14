import { Injectable } from '@nestjs/common';
import { FieldsRepository } from './repositories/fields.repository';
import { CreateFieldDto } from './dto/create-field.dto';
import { UpdateFieldDto } from './dto/update-field.dto';

@Injectable()
export class FieldsService {
  constructor(private readonly repository: FieldsRepository) {}

  create(createFieldDto: CreateFieldDto) {
    return this.repository.create(createFieldDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateFieldDto: UpdateFieldDto) {
    return this.repository.update(id, updateFieldDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
