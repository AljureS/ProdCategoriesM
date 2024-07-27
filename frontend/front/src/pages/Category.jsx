import React from 'react';
import CategoryList from '../components/CategoryList';
import CategoryForm from '../components/CategoryForm';
import { createCategory } from '../services/api';

const Category = () => {
    const handleCreate = async (data) => {
        await createCategory(data);
        window.location.reload(); // Recargar la página para ver los cambios
    };

    return (
        <div>
        <h1>Manage Categories</h1>
        <CategoryForm onSubmit={handleCreate} />
        <CategoryList />
        </div>
    );
};

export default Category;
