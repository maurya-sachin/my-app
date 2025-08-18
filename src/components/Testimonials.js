import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            rating: "⭐⭐⭐⭐⭐",
            text: "Amazing Mediterranean cuisine! The atmosphere is cozy and the staff is incredibly friendly. Highly recommend the Greek salad!",
            image: "/assets/images/restaurant chef B.jpg"
        },
        {
            id: 2,
            name: "Mike Chen",
            rating: "⭐⭐⭐⭐⭐",
            text: "Best restaurant in Chicago! The lemon dessert is absolutely divine. Will definitely be coming back with family.",
            image: "/assets/images/Mario and Adrian A.jpg"
        },
        {
            id: 3,
            name: "Emma Davis",
            rating: "⭐⭐⭐⭐⭐",
            text: "The bruschetta here is out of this world! Authentic flavors that remind me of my trip to Italy. Perfect date night spot.",
            image: "/assets/images/Mario and Adrian b.jpg"
        },
        {
            id: 4,
            name: "Alex Rodriguez",
            rating: "⭐⭐⭐⭐⭐",
            text: "Excellent service and delicious food. The family recipes really shine through in every dish. A true gem in the city!",
            image: "/assets/images/restaurant.jpg"
        }
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <h2>What our customers say</h2>
                <div className="testimonials-grid">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="testimonial-rating">{testimonial.rating}</div>
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="testimonial-image"
                            />
                            <h4 className="testimonial-name">{testimonial.name}</h4>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;