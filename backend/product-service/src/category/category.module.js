// const { Module, forwardRef } = require('@nestjs/common');
// const { TypeOrmModule } = require('@nestjs/typeorm');
// const { CategoryController } = require('./category.controller');
// const { CategoryService } = require('./category.service');
// const { Category } = require('./category.entity');
// const { ProductModule } = require('../product/product.module');

// @Module({
//   imports: [
//     TypeOrmModule.forFeature([Category]),
//     forwardRef(() => ProductModule),
//   ],
//   controllers: [CategoryController],
//   providers: [CategoryService],
//   exports: [CategoryService],
// })
// class CategoryModule {}

// module.exports = { CategoryModule };
