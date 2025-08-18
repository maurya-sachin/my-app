import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <img
                            src="/assets/images/Logo.png"
                            alt="Little Lemon"
                            className="footer-logo"
                        />
                    </div>

                    <div className="footer-section">
                        <h3>Navigation</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><Link to="/booking">Reservations</Link></li>
                            <li><a href="#order">Order Online</a></li>
                            <li><a href="#login">Login</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Contact</h3>
                        <ul>
                            <li><a href="tel:+1234567890">Address</a></li>
                            <li><a href="tel:+1234567890">Phone Number</a></li>
                            <li><a href="mailto:info@littlelemon.com">Email</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Social Media Links</h3>
                        <ul>
                            <li><a href="#facebook">Facebook</a></li>
                            <li><a href="#instagram">Instagram</a></li>
                            <li><a href="#twitter">Twitter</a></li>
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