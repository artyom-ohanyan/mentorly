import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Query,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { SearchUserDto } from './dto/search-user.dto';
import { ApiImplicitQuery } from '@nestjs/swagger/dist/decorators/api-implicit-query.decorator';

@Controller('users')
@ApiTags('users')
@ApiBearerAuth('bearerAuth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: UserEntity, isArray: true })
  @ApiImplicitQuery({ name: 'name', required: false })
  @ApiImplicitQuery({ name: 'surname', required: false })
  @ApiImplicitQuery({ name: 'type', required: false })
  @ApiImplicitQuery({ name: 'createdAt', required: false })
  findAll(@Query() searchDto: SearchUserDto) {
    return this.usersService.findAll(searchDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: UserEntity })
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: UserEntity })
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
}
