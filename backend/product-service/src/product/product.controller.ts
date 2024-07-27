import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ProductDto } from './product.dto';

@Controller('products')
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ) {}

    @Get()
    getProducts() {
        return this.productService.getProducts();
    }

    @Post()
    createProduct(
        @Body() product: ProductDto
    ) {
        return this.productService.createProduct(product);
    }

    @Put(':id')
    updateProduct(
        @Param('id') id,
        @Body() newProduct: ProductDto,
    ) {
        return this.productService.updateProduct(id, newProduct);
    }
}
