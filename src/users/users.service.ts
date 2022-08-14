import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
import { SignupDto } from '../auth/dto/signup.dto';
import { SearchUserDto } from './dto/search-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}
  async create(signupDto: SignupDto) {
    try {
      return await this.repository.create(signupDto);
    } catch (e) {
      throw new Error(e);
    }
  }

  findAll(searchUserDto: SearchUserDto) {
    return this.repository.findAll(searchUserDto);
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }
  findByEmail(email: string) {
    return this.repository.findByEmail(email);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
