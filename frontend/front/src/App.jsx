import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Category from './pages/Category';
import Product from './pages/Product';
import EditCategoryPage from './pages/EditCategoryPage';
import EditProductPage from './pages/EditProductPage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/category">
            <button>Category</button>
          </Link>
          <Link to="/products">
            <button>Product</button>
          </Link>
        </nav>
        <Routes>
          <Route path="/category" element={<Category/>} />
          <Route path="/categories/edit/:id" element={<EditCategoryPage />} />
          <Route path="/products" element={<Product/>} />
          <Route path="/products/edit/:id" element={<EditProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
