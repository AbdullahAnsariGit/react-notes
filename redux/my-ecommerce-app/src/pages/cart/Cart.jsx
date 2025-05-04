// src/pages/CartPage.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../../store/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log('cartItems', cartItems);

  const dispatch = useDispatch();
  const navigation = useNavigate()

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleGoBack = () => {
    navigation('/')
  };
  const handleCheckout = () => {
    dispatch(clearCart())
    alert("Checkout successfully")
    navigation('/')
  }
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <h3>{item.name}</h3>
              <p>${item.price} x {item.quantity}</p>
              <div className="cart-item-actions">
                <button onClick={() => handleIncrease(item.id)}>+</button>
                <button onClick={() => handleDecrease(item.id)}>-</button>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${total}</h3>
          </div>
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {cartItems.length > 0 && <button onClick={handleCheckout}>Checkout</button>}
        <button onClick={handleGoBack}>Go Back</button>
      </div>

    </div>
  );
}

export default CartPage;
