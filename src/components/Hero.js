// src/components/Hero.js
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/restauranfood.jpg';


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
            <Link to="/booking" className="btn-primary">
              Reserve a Table
            </Link>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Delicious Mediterranean food" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;