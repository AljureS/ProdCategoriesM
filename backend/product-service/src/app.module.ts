import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {config as dotenvConfig} from 'dotenv';

dotenvConfig({path: '.development.env'});

@Module({
  imports: [
    ProductModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',  
      port: 5432,
      username: process.env.DB_USERNAME,
      password:  process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['dist/migrations/*{.ts,.js}'], 
      logging: true,
      synchronize: true,
      // dropSchema: true,

    }), 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
