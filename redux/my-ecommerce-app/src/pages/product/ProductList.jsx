// src/pages/ProductPage.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import './ProductList.css';
import { addToCart } from '../../store/cart/cartSlice';

const products = [
  { id: 1, name: 'Product A', price: 100, description: 'Great product A' },
  { id: 2, name: 'Product B', price: 150, description: 'Amazing product B' },
  { id: 3, name: 'Product C', price: 200, description: 'Fantastic product C' },
];

function ProductPage() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    console.log(product);
    dispatch(addToCart(product));
  };

  return (
    <div className="product-page">
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
