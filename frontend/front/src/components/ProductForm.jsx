import React, { useState } from 'react';

const ProductForm = ({ initialData = {}, onSubmit }) => {
    const [name, setName] = useState(initialData.name || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name });
    };

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
        </label>
        <button type="submit">Save</button>
        </form>
    );
};

export default ProductForm;

