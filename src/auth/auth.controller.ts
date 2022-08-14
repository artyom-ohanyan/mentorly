import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiCreatedResponse({ type: UserEntity })
  async signup(@Body() createUserDto: CreateUserDto) {
    try {
      const { accessToken, refreshToken } = await this.authService.createUser(
        createUserDto,
      );
      return {
        accessToken,
        refreshToken,
      };
    } catch (e) {
      return e;
    }
  }
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    try {
      const { accessToken, refreshToken } = await this.authService.login(
        loginDto,
      );
      return {
        accessToken,
        refreshToken,
      };
    } catch (e) {
      return e;
    }
  }

  @Post('refreshToken')
  async refreshToken(@Body() { token }: RefreshTokenDto) {
    return this.authService.refreshToken(token);
  }
}
