import axios from 'axios';

const API_URL_CATEGORIES = 'http://localhost:3001/categories';
const API_URL_PRODUCTS = 'http://localhost:3000/products';

export const getCategories = () => axios.get(API_URL_CATEGORIES);
export const createCategory = (data) => axios.post(API_URL_CATEGORIES, data);
export const updateCategory = (id, data) => axios.put(`${API_URL_CATEGORIES}/${id}`, data);

export const getProducts = () => axios.get(API_URL_PRODUCTS);
export const createProduct = (data) => axios.post(API_URL_PRODUCTS, data);
export const updateProduct = (id, data) => axios.put(`${API_URL_PRODUCTS}/${id}`, data);
