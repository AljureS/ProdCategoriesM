import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Category from './pages/Category';
import Product from './pages/Product';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/categories">
            <button>Category</button>
          </Link>
          <Link to="/products">
            <button>Product</button>
          </Link>
        </nav>
        <Routes>
          <Route path="/categories" element={<Category/>} />
          <Route path="/products" element={<Product/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
