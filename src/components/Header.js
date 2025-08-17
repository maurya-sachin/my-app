import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.svg';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
                hamburgerRef.current?.focus();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isMenuOpen]);

    // Focus management for mobile menu
    useEffect(() => {
        if (isMenuOpen) {
            const firstLink = menuRef.current?.querySelector('a');
            firstLink?.focus();
        }
    }, [isMenuOpen]);

    return (
        <header className="header" role="banner">
            <div className="container">
                <Link to="/" className="logo" aria-label="Little Lemon Home">
                    <img src={logo} alt="Little Lemon Restaurant" />
                </Link>

                <nav
                    className={`nav ${isMenuOpen ? 'nav-open' : ''}`}
                    role="navigation"
                    aria-label="Main navigation"
                    ref={menuRef}
                >
                    <ul className="nav-list" role="menubar">
                        <li role="none">
                            <Link
                                to="/"
                                role="menuitem"
                                onClick={() => setIsMenuOpen(false)}
                                onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li role="none">
                            <Link
                                to="#about"
                                role="menuitem"
                                onClick={() => setIsMenuOpen(false)}
                                onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li role="none">
                            <Link
                                to="#menu"
                                role="menuitem"
                                onClick={() => setIsMenuOpen(false)}
                                onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(false)}
                            >
                                Menu
                            </Link>
                        </li>
                        <li role="none">
                            <Link
                                to="/booking"
                                role="menuitem"
                                onClick={() => setIsMenuOpen(false)}
                                onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(false)}
                            >
                                Reservations
                            </Link>
                        </li>
                        <li role="none">
                            <Link
                                to="#order"
                                role="menuitem"
                                onClick={() => setIsMenuOpen(false)}
                                onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(false)}
                            >
                                Order Online
                            </Link>
                        </li>
                        <li role="none">
                            <Link
                                to="#login"
                                role="menuitem"
                                onClick={() => setIsMenuOpen(false)}
                                onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(false)}
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </nav>

                <button
                    className="hamburger"
                    onClick={toggleMenu}
                    ref={hamburgerRef}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls="main-navigation"
                    aria-haspopup="true"
                >
                    {/* CSS-only hamburger lines - no icon image needed */}
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="sr-only">
                        {isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    </span>
                </button>
            </div>
        </header>
    );
};

export default Header; 