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
        <form
            className="booking-form"
            onSubmit={handleSubmit}
            aria-labelledby="booking-form-title"
            noValidate
        >
            <h2 id="booking-form-title" className="sr-only">
                Restaurant Reservation Form
            </h2>

            <div className="form-group">
                <label htmlFor="date">
                    Choose date *
                    <span className="sr-only">(Required field)</span>
                </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={today}
                    required
                    aria-describedby={errors.date ? "date-error" : "date-help"}
                    aria-invalid={errors.date ? 'true' : 'false'}
                />
                <span id="date-help" className="sr-only">
                    Select a date for your reservation. Must be today or later.
                </span>
                {errors.date && (
                    <span id="date-error" className="error-message" role="alert" aria-live="polite">
                        <span aria-hidden="true">⚠️</span> {errors.date}
                    </span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="time">
                    Choose time *
                    <span className="sr-only">(Required field)</span>
                </label>
                <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    aria-describedby={errors.time ? "time-error" : "time-help"}
                    aria-invalid={errors.time ? 'true' : 'false'}
                >
                    <option value="">Select a time</option>
                    {availableTimes.map(time => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
                <span id="time-help" className="sr-only">
                    Choose an available time slot for your reservation.
                </span>
                {errors.time && (
                    <span id="time-error" className="error-message" role="alert" aria-live="polite">
                        <span aria-hidden="true">⚠️</span> {errors.time}
                    </span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="guests">
                    Number of guests *
                    <span className="sr-only">(Required field, between 1 and 10)</span>
                </label>
                <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    min="1"
                    max="10"
                    required
                    aria-describedby={errors.guests ? "guests-error" : "guests-help"}
                    aria-invalid={errors.guests ? 'true' : 'false'}
                />
                <span id="guests-help" className="sr-only">
                    Enter number of guests, minimum 1, maximum 10.
                </span>
                {errors.guests && (
                    <span id="guests-error" className="error-message" role="alert" aria-live="polite">
                        <span aria-hidden="true">⚠️</span> {errors.guests}
                    </span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="occasion">
                    Occasion *
                    <span className="sr-only">(Required field)</span>
                </label>
                <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleInputChange}
                    required
                    aria-describedby={errors.occasion ? "occasion-error" : "occasion-help"}
                    aria-invalid={errors.occasion ? 'true' : 'false'}
                >
                    <option value="">Select an occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Business">Business</option>
                    <option value="Date">Date</option>
                    <option value="Family Gathering">Family Gathering</option>
                    <option value="Other">Other</option>
                </select>
                <span id="occasion-help" className="sr-only">
                    Select the type of occasion for your visit.
                </span>
                {errors.occasion && (
                    <span id="occasion-error" className="error-message" role="alert" aria-live="polite">
                        <span aria-hidden="true">⚠️</span> {errors.occasion}
                    </span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="comments">
                    Special requests
                    <span className="sr-only">(Optional field)</span>
                </label>
                <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Any special dietary requirements or requests..."
                    aria-describedby="comments-help"
                />
                <span id="comments-help" className="sr-only">
                    Optional field for any special dietary requirements or seating preferences.
                </span>
            </div>

            <div className="form-actions">
                <button
                    type="submit"
                    className="btn-primary"
                    disabled={isSubmitting}
                    aria-describedby="submit-help"
                >
                    <span aria-hidden="true">
                        {isSubmitting ? '⏳' : '🍽️'}
                    </span>
                    {isSubmitting ? 'Submitting...' : 'Make Your Reservation'}
                </button>

                <div id="submit-help" className="form-help">
                    <p>All fields marked with * are required</p>
                    <p>You will receive a confirmation after submitting</p>
                </div>
            </div>

            {/* Live region for form status announcements */}
            <div aria-live="polite" aria-atomic="true" className="sr-only">
                {isSubmitting && "Processing your reservation..."}
            </div>
        </form>
    );
};
export default BookingForm;