// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Logo Section */}
                    <div className="footer-section">
                        <img
                            src="/assets/images/Logo.svg"
                            alt="Little Lemon Logo"
                            className="footer-logo"
                        />
                    </div>

                    {/* Doormat Navigation */}
                    <div className="footer-section">
                        <h4>Doormat Navigation</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/reservations">Reservations</Link></li>
                            <li><Link to="/order-online">Order Online</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-section">
                        <h4>Contact</h4>
                        <ul>
                            <li>Address: 123 Main St, Chicago, IL</li>
                            <li>Phone: (555) 123-4567</li>
                            <li>Email: info@littlelemon.com</li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="footer-section">
                        <h4>Social Media Links</h4>
                        <ul>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 Little Lemon Restaurant. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;