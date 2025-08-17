// src/components/About.js
import React from 'react';
import aboutImage1 from '../assets/images/Mario and Adrian A.jpg';
import aboutImage2 from '../assets/images/Mario and Adrian b.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
              Despite the city's diversity, the two brothers recognized the lack of
              authentic Mediterranean cuisine in Chicago, and were inspired to bring
              the flavors of their hometown in Italy to the people of Chicago.
            </p>
            <p>
              The two brothers continue to oversee the Little Lemon restaurant, nearly
              thirty years later, with the same passion and dedication to bringing
              authentic flavors and a warm, welcoming atmosphere to their customers.
            </p>
          </div>
          <div className="about-images">
            <img
              src={aboutImage1}
              alt="Mario and Adrian cooking"
              className="about-image-1"
            />
            <img
              src={aboutImage2}
              alt="Mario and Adrian in the restaurant"
              className="about-image-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;