const { Controller, Get, Post, Put, Param, Body } = require('@nestjs/common');
const { CategoryService } = require('./category.service');

@Controller('categories')
class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }

    @Get()
    getCategories() {
        return this.categoryService.getCategories();
    }

    @Post()
    createCategory(@Body() categoryData) {
        return this.categoryService.createCategory(categoryData);
    }

    @Put(':id')
    updateCategory(@Param('id') id, @Body() newCategoryData) {
        return this.categoryService.updateCategory(id, newCategoryData);
    }
}

module.exports = { CategoryController };
