import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
const configService = new ConfigService();
const port = configService.get<number>('APP_PORT', 3000);
const environment = configService.get<string>('NODE_ENV', 'dev');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(port);
  console.log(`🚀 Server is running on port: ${port}`);
  console.log(`🌍 Environment: ${environment}`);
}
bootstrap();
