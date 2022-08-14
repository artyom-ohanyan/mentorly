import { Module } from '@nestjs/common';
import { FieldsService } from './fields.service';
import { FieldsController } from './fields.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { FieldsRepository } from './repositories/fields.repository';

@Module({
  controllers: [FieldsController],
  providers: [FieldsService, FieldsRepository],
  imports: [PrismaModule],
})
export class FieldsModule {}
