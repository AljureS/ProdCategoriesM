import { Module, forwardRef} from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';
// import { CategoryModule } from '../category/category.module';
@Module({
  imports: [TypeOrmModule.forFeature([Product])
],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository]
})
export class ProductModule {}
