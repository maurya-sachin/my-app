// src/components/Header.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo">
                    <img src={logo} alt="Little Lemon" />
                </Link>

                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link to="#about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                        <li><Link to="#menu" onClick={() => setIsMenuOpen(false)}>Menu</Link></li>
                        <li><Link to="/booking" onClick={() => setIsMenuOpen(false)}>Reservations</Link></li>
                        <li><Link to="#order" onClick={() => setIsMenuOpen(false)}>Order Online</Link></li>
                        <li><Link to="#login" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
                    </ul>
                </nav>

                <button
                    className="hamburger"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;