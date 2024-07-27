import React from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import { createProduct } from '../services/api';

const Product = () => {
    const handleCreate = async (data) => {
        await createProduct(data);
        window.location.reload(); 
    };

    return (
        <div>
        <h1>Manage Products</h1>
        <ProductForm onSubmit={handleCreate} />
        <ProductList />
        </div>
    );
};

export default Product;
