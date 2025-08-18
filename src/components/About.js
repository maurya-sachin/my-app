import React from 'react';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim velit mollit. Exercitation
                            veniam consequat sunt nostrud amet.
                        </p>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim velit mollit. Exercitation
                            veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                    <div className="about-images">
                        <img
                            src="/assets/images/Mario and Adrian A.jpg"
                            alt="Mario and Adrian"
                            className="about-image-1"
                        />
                        <img
                            src="/assets/images/Mario and Adrian b.jpg"
                            alt="Mario and Adrian cooking"
                            className="about-image-2"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;