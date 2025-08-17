// pages/Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p>
                                We are a family owned Mediterranean restaurant, focused on traditional recipes
                                served with a modern twist.
                            </p>
                            <Link to="/reservations" className="btn">Reserve a Table</Link>
                        </div>
                        <div className="hero-image">
                            <img src="/assets/images/restauranfood.jpg" alt="Restaurant food" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Specials Section */}
            <section className="specials">
                <div className="container">
                    <div className="specials-header">
                        <h2>This Week's Specials!</h2>
                        <Link to="/menu" className="btn btn-secondary">Online Menu</Link>
                    </div>

                    <div className="specials-grid">
                        {/* Greek Salad */}
                        <div className="special-card">
                            <img src="/assets/images/greek salad.jpg" alt="Greek salad" />
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>Greek Salad</h3>
                                    <span className="price">$12.99</span>
                                </div>
                                <p>
                                    The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese,
                                    garnished with crunchy garlic and rosemary croutons.
                                </p>
                                <Link to="/order-online" className="order-link">Order a delivery</Link>
                            </div>
                        </div>

                        {/* Bruchetta */}
                        <div className="special-card">
                            <img src="/assets/images/bruchetta.svg" alt="Bruchetta" />
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>Bruchetta</h3>
                                    <span className="price">$5.99</span>
                                </div>
                                <p>
                                    Our Bruschetta is made from grilled bread that has been smeared with garlic and
                                    seasoned with salt and olive oil.
                                </p>
                                <Link to="/order-online" className="order-link">Order a delivery</Link>
                            </div>
                        </div>

                        {/* Lemon Dessert */}
                        <div className="special-card">
                            <img src="/assets/images/lemon dessert.jpg" alt="Lemon dessert" />
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>Lemon Dessert</h3>
                                    <span className="price">$5.00</span>
                                </div>
                                <p>
                                    This comes straight from grandma's recipe book, every last ingredient has been sourced
                                    and is as authentic as can be imagined.
                                </p>
                                <Link to="/order-online" className="order-link">Order a delivery</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <div className="container">
                    <h2>What our customers say!</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="rating">⭐⭐⭐⭐⭐</div>
                            <img src="/assets/images/Mario and Adrian A.jpg" alt="Customer" className="customer-photo" />
                            <h4>John Doe</h4>
                            <p>"Amazing food and great service! Will definitely come back."</p>
                        </div>

                        <div className="testimonial-card">
                            <div className="rating">⭐⭐⭐⭐⭐</div>
                            <img src="/assets/images/Mario and Adrian b.jpg" alt="Customer" className="customer-photo" />
                            <h4>Jane Smith</h4>
                            <p>"The Greek salad was fantastic! Fresh ingredients and perfect portions."</p>
                        </div>

                        <div className="testimonial-card">
                            <div className="rating">⭐⭐⭐⭐⭐</div>
                            <img src="/assets/images/restaurant chef B.jpg" alt="Customer" className="customer-photo" />
                            <h4>Mike Johnson</h4>
                            <p>"Best Mediterranean restaurant in Chicago. Highly recommended!"</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;