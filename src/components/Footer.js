// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <img src={logo} alt="Little Lemon" className="footer-logo" />
                    </div>

                    <div className="footer-section">
                        <h4>Navigation</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="#about">About</Link></li>
                            <li><Link to="#menu">Menu</Link></li>
                            <li><Link to="/booking">Reservations</Link></li>
                            <li><Link to="#order">Order Online</Link></li>
                            <li><Link to="#login">Login</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact</h4>
                        <ul>
                            <li>123 Mediterranean Ave</li>
                            <li>Chicago, IL 60601</li>
                            <li>(312) 555-0123</li>
                            <li>info@littlelemon.com</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Social Media</h4>
                        <ul>
                            <li><a href="#" aria-label="Facebook">Facebook</a></li>
                            <li><a href="#" aria-label="Instagram">Instagram</a></li>
                            <li><a href="#" aria-label="Twitter">Twitter</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 Little Lemon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;