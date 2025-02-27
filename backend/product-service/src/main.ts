import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.use(morgan('dev'));
  await app.listen(3000);
  console.log(`Running on: ${await app.getUrl()}`);
  
}
bootstrap();
