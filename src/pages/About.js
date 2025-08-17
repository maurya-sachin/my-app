// pages/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <section className="about-hero section-padding">
          <div className="about-content grid-2">
            <div className="about-text">
              <h1 className="display-title" style={{ color: 'var(--primary-green)' }}>Little Lemon</h1>
              <h2 className="sub-title" style={{ color: 'var(--primary-green)' }}>Chicago</h2>
              <p className="paragraph-text">
                Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario Rossi,
                who moved to the United States to pursue their shared dream of owning a restaurant.
                To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.
              </p>
              <p className="paragraph-text">
                Adrian does all the marketing for the restaurant and led the effort to expand
                the menu beyond classic Italian to incorporate additional cuisines from the
                Mediterranean region.
              </p>
            </div>
            <div className="about-images">
              <img
                src="/assets/images/Mario and Adrian A.jpg"
                alt="Mario and Adrian cooking together"
                className="chef-image-main rounded-image"
              />
              <img
                src="/assets/images/Mario and Adrian b.jpg"
                alt="Mario and Adrian in the restaurant"
                className="chef-image-secondary rounded-image"
              />
            </div>
          </div>
        </section>

        <section className="restaurant-showcase section-padding-sm">
          <h2 className="section-title section-center">Our Restaurant Experience</h2>
          <div className="showcase-grid grid-3">
            <article className="showcase-item">
              <img src="/assets/images/restaurant.jpg" alt="Restaurant interior" className="rounded-image" />
              <h3 className="card-title">Warm Atmosphere</h3>
              <p className="paragraph-text">
                Enjoy a warm and welcoming atmosphere that combines traditional Mediterranean
                charm with modern comfort. Our dining room creates the perfect setting for any occasion.
              </p>
            </article>
            <article className="showcase-item">
              <img src="/assets/images/restaurant chef B.jpg" alt="Head chef preparing food" className="rounded-image" />
              <h3 className="card-title">Expert Chefs</h3>
              <p className="paragraph-text">
                Our experienced chefs bring authentic flavors from the Mediterranean,
                using traditional techniques passed down through generations and the freshest ingredients.
              </p>
            </article>
            <article className="showcase-item">
              <img src="/assets/images/restauranfood.jpg" alt="Signature dishes" className="rounded-image" />
              <h3 className="card-title">Signature Dishes</h3>
              <p className="paragraph-text">
                Each dish tells a story of tradition and innovation, carefully crafted to deliver
                an authentic Mediterranean experience with every bite.
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;