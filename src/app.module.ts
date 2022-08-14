import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { FieldsModule } from './fields/fields.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import config from 'src/common/config/config';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    FieldsModule,
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
