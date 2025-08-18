import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <Link to="/">
                        <img src="/assets/images/Logo.svg" alt="Little Lemon" className="logo" />
                    </Link>

                    <button className="menu-toggle" onClick={toggleMenu}>
                        ☰
                    </button>

                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li>
                            <Link
                                to="/"
                                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="nav-link"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#menu"
                                className="nav-link"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Menu
                            </a>
                        </li>
                        <li>
                            <Link
                                to="/booking"
                                className={`nav-link ${isActive('/booking') ? 'active' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Reservations
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="nav-link"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Order Online
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="nav-link"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;