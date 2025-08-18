import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>
                            We are a family owned Mediterranean restaurant, focused on traditional
                            recipes served with a modern twist.
                        </p>
                        <Link to="/booking" className="btn">
                            Reserve a Table
                        </Link>
                    </div>
                    <div className="hero-image-container">
                        <img
                            src="/assets/images/restauranfood.jpg"
                            alt="Restaurant food"
                            className="hero-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;