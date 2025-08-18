import React from 'react';

const Specials = () => {
    const specials = [
        {
            id: 1,
            title: "Greek salad",
            price: "$12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            image: "/assets/images/greek salad.jpg"
        },
        {
            id: 2,
            title: "Bruchetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            image: "/assets/images/bruchetta.svg"
        },
        {
            id: 3,
            title: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            image: "/assets/images/lemon dessert.jpg"
        }
    ];

    return (
        <section className="specials" id="menu">
            <div className="container">
                <div className="specials-header">
                    <h2>This weeks specials!</h2>
                    <a href="#menu" className="btn">Online Menu</a>
                </div>

                <div className="specials-grid">
                    {specials.map(special => (
                        <div key={special.id} className="special-card">
                            <img
                                src={special.image}
                                alt={special.title}
                                className="special-image"
                            />
                            <div className="special-content">
                                <div className="special-header">
                                    <h3 className="special-title">{special.title}</h3>
                                    <span className="special-price">{special.price}</span>
                                </div>
                                <p className="special-description">{special.description}</p>
                                <a href="#order" className="special-order">
                                    Order a delivery 🏍️
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specials;