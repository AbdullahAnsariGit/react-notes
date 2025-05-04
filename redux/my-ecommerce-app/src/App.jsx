import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import CartPage from './pages/cart/Cart';
import ProductPage from './pages/product/ProductList';
import { useSelector } from 'react-redux';

function App() {
  const cartItems = useSelector((state) => state);
  console.log(cartItems);
  
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
