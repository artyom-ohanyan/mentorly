// import 'dotenv/config';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  CorsConfig,
  NestConfig,
  SwaggerConfig,
} from './common/config/config.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const corsConfig = configService.get<CorsConfig>('cors');
  const swaggerConfig = configService.get<SwaggerConfig>('swagger');
  if (swaggerConfig.enabled) {
    const config = new DocumentBuilder()
      .setTitle('Mentorly')
      .setDescription('The Mentorly API description')
      .setVersion('0.1')
      .addBearerAuth(
        {
          description: 'Default JWT Authorization',
          type: 'http',
          in: 'header',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
        'bearerAuth',
      )
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
  // Cors
  if (corsConfig.enabled) {
    app.enableCors();
  }
  await app.listen(process.env.PORT || nestConfig.port);
}
bootstrap();
