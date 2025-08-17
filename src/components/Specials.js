// src/components/Specials.js
import React from 'react';
import { Link } from 'react-router-dom';
import greekSalad from '../assets/images/greek salad.jpg'; // Using provided greek salad image
import bruchetta from '../assets/images/bruchetta.svg';
import lemonDessert from '../assets/images/lemon dessert.jpg';

const DeliveryIcon = () => (
    <span style={{ fontSize: '16px', marginLeft: '5px' }}>🚗</span>
);

const specialsData = [
    {
        id: 1,
        name: "Greek Salad",
        price: "$12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        image: greekSalad
    },
    {
        id: 2,
        name: "Bruchetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        image: bruchetta
    },
    {
        id: 3,
        name: "Lemon Dessert",
        price: "$5.00",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image: lemonDessert
    }
];

const Specials = () => {
    return (
        <section className="specials" id="menu" >
            <div className="container" >
                <div className="specials-header" >
                    <h2>This week's specials!</h2>
                    <Link to="#order" className="btn-secondary" >
                        Online Menu
                    </Link>
                </div>

                < div className="specials-grid" >
                    {
                        specialsData.map(special => (
                            <div key={special.id} className="special-card" >
                                <div className="card-image" >
                                    <img src={special.image} alt={special.name} />
                                </div>
                                < div className="card-content" >
                                    <div className="card-header" >
                                        <h3>{special.name} </h3>
                                        < span className="price" > {special.price} </span>
                                    </div>
                                    < p className="card-description" > {special.description} </p>
                                    < div className="card-footer" >
                                        <Link to="#order" className="order-link" >
                                            Order a delivery
                                            < DeliveryIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Specials;