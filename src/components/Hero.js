import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/restauranfood.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" role="region" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 id="hero-title">Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on traditional
              recipes served with a modern twist.
            </p>
            <Link
              to="/booking"
              className="btn-primary"
              aria-describedby="reserve-description"
            >
              Reserve a Table
            </Link>
            <span id="reserve-description" className="sr-only">
              Navigate to reservation page to book a table at Little Lemon restaurant
            </span>
          </div>
          <div className="hero-image">
            <img
              src={heroImage}
              alt="Beautifully plated Mediterranean dish with fresh ingredients and vibrant colors"
              loading="eager"
              width="400"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;