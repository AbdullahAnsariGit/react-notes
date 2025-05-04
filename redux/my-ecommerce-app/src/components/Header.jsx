// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <header className="header">
            <div className="logo">
                <h2>My E-commerce</h2>
            </div>
            <div className="cart-icon">
                <Link to="/cart">
                    <i className="fa fa-shopping-cart"></i>
                    <span>{cartItems.length}</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;
