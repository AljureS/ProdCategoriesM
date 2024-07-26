// const { EntityRepository, Repository } = require('typeorm');
// const { Category } = require('./category.entity');

// @EntityRepository(Category)
// class CategoryRepository extends Repository {
//     findAll() {
//         return this.find();
//     }

//     createCategory(categoryData) {
//         const category = this.create(categoryData);
//         return this.save(category);
//     }

//     async updateCategory(id, newCategoryData) {
//         await this.update(id, newCategoryData);
//         return this.findOne(id);
//     }
// }

// module.exports = { CategoryRepository };
