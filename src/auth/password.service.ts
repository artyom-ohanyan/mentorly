import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { SecurityConfig } from 'src/common/config/config.interface';

@Injectable()
export class PasswordService {
  constructor(private configService: ConfigService) {}

  get bcryptSaltRounds(): string | number {
    const securityConfig = this.configService.get<SecurityConfig>('security');
    const saltOrRounds = securityConfig.bcryptSaltOrRound;

    return Number.isInteger(Number(saltOrRounds))
      ? Number(saltOrRounds)
      : saltOrRounds;
  }

  async validatePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await compare(password, hashedPassword);
  }

  async hashPassword(password: string): Promise<string> {
    return await hash(password, this.bcryptSaltRounds);
  }
}
