import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
   whitelist: true,
  }));
  await app.listen(process.env.PORT ?? 3000);
  console.log(`🚀 Server is running on port: ${process.env.PORT ?? 30001}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV ?? 'development'}`);
}
bootstrap();
