import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        specialRequests: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (name === 'date') {
            dispatch({ type: 'UPDATE_TIMES', date: value });
        }

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.date) {
            newErrors.date = 'Date is required';
        }

        if (!formData.time) {
            newErrors.time = 'Time is required';
        }

        if (!formData.guests || formData.guests < 1 || formData.guests > 10) {
            newErrors.guests = 'Number of guests must be between 1 and 10';
        }

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validateForm();

        if (Object.keys(newErrors).length === 0) {
            const success = submitForm(formData);
            if (success) {
                setFormData({
                    date: '',
                    time: '',
                    guests: 1,
                    occasion: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    specialRequests: ''
                });
                alert('Reservation confirmed!');
            }
        } else {
            setErrors(newErrors);
        }
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="date">Choose date *</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={today}
                    required
                />
                {errors.date && <span className="error">{errors.date}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="time">Choose time *</label>
                <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select a time</option>
                    {availableTimes.map(time => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
                {errors.time && <span className="error">{errors.time}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="guests">Number of guests *</label>
                <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    min="1"
                    max="10"
                    required
                />
                {errors.guests && <span className="error">{errors.guests}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleInputChange}
                >
                    <option value="">Select an occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="engagement">Engagement</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                />
                {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="specialRequests">Special Requests</label>
                <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    placeholder="Any allergies, dietary restrictions, or special requests..."
                />
            </div>

            <button type="submit" className="btn">
                Make Your reservation
            </button>
        </form>
    );
};

export default BookingForm;