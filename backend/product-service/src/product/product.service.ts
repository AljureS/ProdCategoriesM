import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
    constructor(
        private readonly productRepository: ProductRepository
    ){}

    getProducts() {
        return this.productRepository.getProducts();
    }

    createProduct(product) {
        return this.productRepository.createProduct(product);
    }

    updateProduct(id, newProduct) {
        return this.productRepository.updateProduct(id, newProduct);
    }
}
