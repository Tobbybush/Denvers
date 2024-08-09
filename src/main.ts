import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from './filters';
import { TransformInterceptor } from './interceptors';
import { ValidationPipe } from './pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('NestApplication');

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  app.setGlobalPrefix('/api');

  const configService = app.get(ConfigService);

  const port = configService.get('PORT');

  await app.listen(port);

  logger.log(`nexttech service is running on: ${await app.getUrl()}`);
}

bootstrap();
