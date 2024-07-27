import React from 'react';
import CategoryForm from '../components/CategoryForm';
import CategoryList from '../components/CategoryList';

const CategoryPage = () => {
    return (
        <div>
            <h1>Manage Categories</h1>
            <CategoryForm />
            <CategoryList />
        </div>
    );
};

export default CategoryPage;
