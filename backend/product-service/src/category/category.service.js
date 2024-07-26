const { Injectable } = require('@nestjs/common');
const { getRepository } = require('typeorm');
const { Category } = require('./category.entity');

@Injectable()
class CategoryService {
    constructor() {
        this.categoryRepository = getRepository(Category);
    }

    getCategories() {
        return this.categoryRepository.find();
    }

    createCategory(categoryData) {
        const category = this.categoryRepository.create(categoryData);
        return this.categoryRepository.save(category);
    }

    updateCategory(id, newCategoryData) {
        return this.categoryRepository.update(id, newCategoryData)
            .then(() => this.categoryRepository.findOne(id));
    }
}

module.exports = { CategoryService };
