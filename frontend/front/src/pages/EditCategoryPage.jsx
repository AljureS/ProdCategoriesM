import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateCategory } from '../services/api';
import CategoryForm from '../components/CategoryForm';

const EditCategoryPage = ({ initialData }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [category, setCategory] = useState(initialData || { name: '' });

    const handleSubmit = async (data) => {
        try {
        await updateCategory(id, data);
        navigate('/categories');
        } catch (error) {
        console.error("Error updating category:", error);
        }
    };

    return (
        <div>
        <h1>Edit Category</h1>
        <CategoryForm initialData={category} onSubmit={handleSubmit} />
        </div>
    );
};

export default EditCategoryPage;
