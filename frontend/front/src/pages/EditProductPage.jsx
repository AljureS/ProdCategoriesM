import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateProduct } from '../services/api';
import ProductForm from '../components/ProductForm';

const EditProductPage = ({ initialData }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(initialData || { name: '' });

    const handleSubmit = async (data) => {
        try {
        await updateProduct(id, data);
        navigate('/products');
        } catch (error) {
        console.error("Error updating product:", error);
        }
    };

    return (
        <div>
        <h1>Edit Product</h1>
        <ProductForm initialData={product} onSubmit={handleSubmit} />
        </div>
    );
};

export default EditProductPage;
