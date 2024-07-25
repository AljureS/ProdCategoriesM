import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { Repository } from "typeorm";
import { ProductDto } from "./product.dto";

@Injectable()
export class ProductRepository {
    constructor(
        @InjectRepository(Product)
        private readonly productsRepository: Repository<Product>
    ){}

    async getProducts():Promise<Product[]> {
        return await this.productsRepository.find();
    }

    async createProduct (product: ProductDto){
        const newProduct = await this.productsRepository.create(product);
        return this.productsRepository.save(newProduct);
    }

    async updateProduct (id, newProduct: ProductDto){
        const product = await this.productsRepository.findOneBy({id});
        
        if (!product) {
            throw new Error('Product not found');
        }
        
        await this.productsRepository.update(id, newProduct) 

        const updatedProduct = await this.productsRepository.findOneBy({id})

        return updatedProduct
    }
}