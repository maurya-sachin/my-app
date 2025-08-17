// components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img
                        src="/assets/images/Logo.svg"
                        alt="Little Lemon Logo"
                        className="logo-img"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;