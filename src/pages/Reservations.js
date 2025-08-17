// pages/Reservations.js
import React, { useState } from 'react';
import './Reservations.css';

const Reservations = () => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '1',
        occasion: 'Birthday'
    });

    const availableTimes = [
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reservation submitted:', formData);
        // Here you would typically send the data to your backend
        alert('Reservation submitted successfully!');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="reservations-page">
            <div className="container">
                <section className="reservation-hero section-padding">
                    <div className="hero-content">
                        <h1 className="display-title" style={{ color: 'var(--primary-green)' }}>Reserve a Table</h1>
                        <p className="lead-text">
                            Book your table at Little Lemon and experience the best Mediterranean cuisine in Chicago.
                        </p>
                    </div>
                </section>

                <section className="reservation-form-section">
                    <div className="form-container">
                        <form onSubmit={handleSubmit} className="reservation-form">
                            <div className="form-group">
                                <label htmlFor="date" className="form-label">Choose date</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="time" className="form-label">Choose time</label>
                                <select
                                    id="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="form-select"
                                    required
                                >
                                    <option value="">Select a time</option>
                                    {availableTimes.map(time => (
                                        <option key={time} value={time}>{time}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="guests" className="form-label">Number of guests</label>
                                <select
                                    id="guests"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    className="form-select"
                                    required
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                        <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="occasion" className="form-label">Occasion</label>
                                <select
                                    id="occasion"
                                    name="occasion"
                                    value={formData.occasion}
                                    onChange={handleChange}
                                    className="form-select"
                                >
                                    <option value="Birthday">Birthday</option>
                                    <option value="Anniversary">Anniversary</option>
                                    <option value="Date">Date</option>
                                    <option value="Business">Business</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <button type="submit" className="btn submit-btn">
                                Make Your Reservation
                            </button>
                        </form>

                        <div className="reservation-info">
                            <h3 className="card-title">Reservation Information</h3>
                            <div className="info-item">
                                <h4>Restaurant Hours</h4>
                                <p className="paragraph-text">Monday - Sunday: 5:00 PM - 10:00 PM</p>
                            </div>
                            <div className="info-item">
                                <h4>Contact</h4>
                                <p className="paragraph-text">Phone: (555) 123-4567</p>
                                <p className="paragraph-text">Email: reservations@littlelemon.com</p>
                            </div>
                            <div className="info-item">
                                <h4>Cancellation Policy</h4>
                                <p className="paragraph-text">
                                    Please call at least 2 hours in advance to cancel or modify your reservation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Reservations;