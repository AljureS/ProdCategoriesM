import React, { useEffect, useState } from 'react';
import { getCategories, deleteCategory } from '../services/api';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const response = await getCategories();
        setCategories(response.data);
    };

    const handleDelete = async (id) => {
        await deleteCategory(id);
        fetchCategories();
    };

    return (
        <div>
        <h2>Category List</h2>
        <ul>
            {categories.map((category) => (
            <li key={category.id}>
                {category.name}
                <button onClick={() => handleDelete(category.id)}>Delete</button>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default CategoryList;
