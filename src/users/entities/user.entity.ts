import { BaseEntity } from 'src/common/entities/base.entity';

export class UserEntity extends BaseEntity {
  email: string;
  firstname?: string;
  lastname?: string;
  password: string;
}
