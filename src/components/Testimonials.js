// src/components/Testimonials.js

// Since customer photos weren't provided, we'll use placeholder avatars
const createAvatarPlaceholder = (name) => {
    const initials = name.split(' ').map(n => n[0]).join('');
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];
    const colorIndex = name.charCodeAt(0) % colors.length;

    return {
        initials,
        backgroundColor: colors[colorIndex]
    };
};

const testimonialsData = [
    {
        id: 1,
        name: "Maria Rodriguez",
        rating: 5,
        review: "Amazing Mediterranean flavors! The Greek salad is absolutely delicious and the service is exceptional.",
    },
    {
        id: 2,
        name: "John Smith",
        rating: 5,
        review: "Little Lemon has become our go-to restaurant. The atmosphere is perfect for family dinners.",
    },
    {
        id: 3,
        name: "Sarah Johnson",
        rating: 4,
        review: "Great food and wonderful staff. The lemon dessert is a must-try! Highly recommend this place.",
    },
    {
        id: 4,
        name: "Michael Chen",
        rating: 5,
        review: "Authentic Mediterranean cuisine with a modern twist. The bruchetta is the best I've ever had!",
    }
];

const Testimonials = () => {
    const renderStars = (rating) => {
        return Array(5).fill(0).map((_, i) => (
            <span
                key={i}
                className={`star ${i < rating ? 'filled' : ''}`}
                aria-hidden="true"
            >
                ⭐
            </span>
        ));
    };

    return (
        <section className="testimonials">
            <div className="container">
                <h2>What our customers say</h2>
                <div className="testimonials-grid">
                    {testimonialsData.map(testimonial => {
                        const avatar = createAvatarPlaceholder(testimonial.name);
                        return (
                            <div key={testimonial.id} className="testimonial-card">
                                <div className="testimonial-header">
                                    <div className="customer-info">
                                        <div
                                            className="customer-photo"
                                            style={{ backgroundColor: avatar.backgroundColor }}
                                            aria-label={`${testimonial.name} avatar`}
                                        >
                                            {avatar.initials}
                                        </div>
                                        <div>
                                            <h4>{testimonial.name}</h4>
                                            <div className="rating" aria-label={`${testimonial.rating} out of 5 stars`}>
                                                {renderStars(testimonial.rating)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="review-text">"{testimonial.review}"</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;