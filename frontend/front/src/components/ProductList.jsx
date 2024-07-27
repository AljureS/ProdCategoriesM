import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/api';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
        const response = await getProducts();
        setProducts(response.data);
        };

        fetchProducts();
    }, []);

    return (
        <div>
        <h2>Product List</h2>
        <ul>
            {products.map((product) => (
            <li key={product.id}>
                {product.name}
                <Link to={`/products/edit/${product.id}`}>Edit</Link>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default ProductList;
