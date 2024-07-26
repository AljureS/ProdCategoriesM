const { getRepository } = require('typeorm');
const { CategorySchema } = require('../entity/category.entity');

const getCategories = async (req, res) => { 
    try {
        const categoryRepository = getRepository(CategorySchema);
        const categories = await categoryRepository.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las categorías' });
    }
};

const createCategory = async (req, res) => {
    try {
        console.log(req.body);
        const {name} = req.body
        console.log(name);
        const categoryRepository = getRepository(CategorySchema);
        const category = categoryRepository.create({name});
        const savedCategory = await categoryRepository.save(category);
        res.status(201).json(savedCategory);
    } catch (error) {
        console.error('Error al conectar a la base de datos', error)
        res.status(500).json({ message: 'Error al crear la categoría' });
    }
};

const updateCategory = async (req, res) => {
    try {
        const categoryRepository = getRepository(CategorySchema);
        await categoryRepository.update(req.params.id, req.body);
        const updatedCategory = await categoryRepository.findOne(req.params.id);
        res.json(updatedCategory);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la categoría' });
    }
};

module.exports = {
    getCategories,
    createCategory,
    updateCategory,
};
