import React, { useState } from 'react';
import { createCategory, updateCategory } from '../services/api';

const CategoryForm = ({ category, onSave }) => {
    const [name, setName] = useState(category ? category.name : '');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (category) {
            await updateCategory(category.id, { name });
        } else {
            await createCategory({ name });
        }
        onSave();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Category Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default CategoryForm;
