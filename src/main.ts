import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { up } from '../migrations/1645383143695-create_admin.js';
import { AppModule } from './app.module';

async function bootstrap() {
  await up();
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
