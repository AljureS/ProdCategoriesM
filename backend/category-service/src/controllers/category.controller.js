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
        const { id } = req.params;
        
        const categoryRepository = getRepository(CategorySchema);
        const updateResult = await categoryRepository.update(id, req.body);
        if (updateResult.affected === 0) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        // const updatedCategory = await categoryRepository.findOne(id);
        res.status(200).json({message: `Category with id: ${id} updated`});
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la categoría' });
    }
};

module.exports = {
    getCategories,
    createCategory,
    updateCategory,
};
