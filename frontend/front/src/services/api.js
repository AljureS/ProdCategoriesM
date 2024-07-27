import axios from 'axios';

const API_URL = 'http://localhost:3001'; 

export const getCategories = () => axios.get(API_URL);
export const createCategory = (data) => axios.post(API_URL, data);
export const updateCategory = (id, data) => axios.put(`${API_URL}/${id}`, data);


const API_URL2 = 'http://localhost:3000'; 

export const getProducts = () => axios.get(API_URL);
export const createProduct = (data) => axios.post(API_URL, data);
export const updateproduct = (id, data) => axios.put(`${API_URL}/${id}`, data);