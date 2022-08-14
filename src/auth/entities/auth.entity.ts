import { UserEntity } from 'src/users/entities/user.entity';
import { Token } from './token.entity';

export class Auth extends Token {
  user: UserEntity;
}
