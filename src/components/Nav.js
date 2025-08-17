// components/Nav.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-content">
                    {/* Mobile menu button */}
                    <button className="menu-toggle" onClick={toggleMenu}>
                        <img
                            src="/assets/images/🦆 icon _hamburger menu_.svg"
                            alt="Menu"
                            className="hamburger-icon"
                        />
                    </button>

                    {/* Navigation links */}
                    <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                        <li><Link to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</Link></li>
                        <li><Link to="/reservations" onClick={() => setIsMenuOpen(false)}>Reservations</Link></li>
                        <li><Link to="/order-online" onClick={() => setIsMenuOpen(false)}>Order Online</Link></li>
                        <li><Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;