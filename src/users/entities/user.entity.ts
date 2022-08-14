import { BaseEntity } from 'src/common/entities/base.entity';

export class UserEntity extends BaseEntity {
  email: string;
  name: string;
  surname: string;
  password: string;
}
