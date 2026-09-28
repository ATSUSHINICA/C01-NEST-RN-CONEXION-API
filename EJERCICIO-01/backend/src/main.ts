import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Enable CORS for browser/web requests
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
