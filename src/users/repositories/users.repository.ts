import {
  ConflictException,
  Injectable,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateUserDto } from '../dto/update-user.dto';
import { SignupDto } from '../../auth/dto/signup.dto';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}
  async create(signupDto: SignupDto) {
    try {
      return await this.prisma.users.create({ data: signupDto });
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2002'
      ) {
        throw new ConflictException(`Email ${signupDto.email} already used.`);
      } else {
        throw new Error(e);
      }
    }
  }
  async findAll() {
    return await this.prisma.users.findMany({ where: { published: true } });
  }
  async findOne(id: number) {
    return await this.prisma.users.findUnique({
      where: { id: id },
    });
  }
  async findByEmail(email: string) {
    return await this.prisma.users.findUnique({
      where: { email: email },
    });
  }
  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prisma.users.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.users.delete({ where: { id } });
  }
}
