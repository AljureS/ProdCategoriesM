import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
        const response = await getCategories();
        setCategories(response.data);
        };

        fetchCategories();
    }, []);

    return (
        <div>
        <h2>Category List</h2>
        <ul>
            {categories.map((category) => (
            <li key={category.id}>
                {category.name}
                <Link to={`/categories/edit/${category.id}`}>Edit</Link>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default CategoryList;
