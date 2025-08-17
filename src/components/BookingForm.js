// src/components/BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: '',
        comments: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }

        if (name === 'date' && value) {
            updateTimes(new Date(value));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.date) {
            newErrors.date = 'Please select a date';
        }

        if (!formData.time) {
            newErrors.time = 'Please select a time';
        }

        if (!formData.guests || formData.guests < 1 || formData.guests > 10) {
            newErrors.guests = 'Number of guests must be between 1 and 10';
        }

        if (!formData.occasion) {
            newErrors.occasion = 'Please select an occasion';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const success = submitForm(formData);
            if (!success) {
                alert('Failed to submit reservation. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
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
                    aria-describedby={errors.date ? "date-error" : undefined}
                />
                {errors.date && (
                    <span id="date-error" className="error-message" role="alert">
                        {errors.date}
                    </span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="time">Choose time *</label>
                <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    aria-describedby={errors.time ? "time-error" : undefined}
                >
                    <option value="">Select a time</option>
                    {availableTimes.map(time => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
                {errors.time && (
                    <span id="time-error" className="error-message" role="alert">
                        {errors.time}
                    </span>
                )}
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
                    aria-describedby={errors.guests ? "guests-error" : undefined}
                />
                {errors.guests && (
                    <span id="guests-error" className="error-message" role="alert">
                        {errors.guests}
                    </span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="occasion">Occasion *</label>
                <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleInputChange}
                    required
                    aria-describedby={errors.occasion ? "occasion-error" : undefined}
                >
                    <option value="">Select an occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Business">Business</option>
                    <option value="Date">Date</option>
                    <option value="Family Gathering">Family Gathering</option>
                    <option value="Other">Other</option>
                </select>
                {errors.occasion && (
                    <span id="occasion-error" className="error-message" role="alert">
                        {errors.occasion}
                    </span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="comments">Special requests</label>
                <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Any special dietary requirements or requests..."
                />
            </div>

            <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
                aria-describedby="submit-help"
            >
                {isSubmitting ? 'Submitting...' : 'Make Your Reservation'}
            </button>

            <p id="submit-help" className="form-help">
                All fields marked with * are required
            </p>
        </form>
    );
};

export default BookingForm;