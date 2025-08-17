// src/components/ConfirmationPage.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
    const location = useLocation();
    const bookingData = location.state?.bookingData;

    if (!bookingData) {
        return (
            <div className="confirmation-page">
                <div className="container">
                    <div className="confirmation-content">
                        <h1>No booking data found</h1>
                        <p>Please make a reservation to see confirmation details.</p>
                        <Link to="/booking" className="btn-primary">
                            Make a Reservation
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="confirmation-page">
            <div className="container">
                <div className="confirmation-content">
                    <div className="confirmation-header">
                        <div className="success-icon">✓</div>
                        <h1>Reservation Confirmed!</h1>
                        <p>Thank you for choosing Little Lemon. We look forward to serving you!</p>
                    </div>

                    <div className="reservation-details">
                        <h2>Reservation Details</h2>
                        <div className="details-grid">
                            <div className="detail-item">
                                <strong>Date:</strong>
                                <span>{formatDate(bookingData.date)}</span>
                            </div>
                            <div className="detail-item">
                                <strong>Time:</strong>
                                <span>{bookingData.time}</span>
                            </div>
                            <div className="detail-item">
                                <strong>Party Size:</strong>
                                <span>{bookingData.guests} {bookingData.guests === 1 ? 'guest' : 'guests'}</span>
                            </div>
                            <div className="detail-item">
                                <strong>Occasion:</strong>
                                <span>{bookingData.occasion}</span>
                            </div>
                            {bookingData.comments && (
                                <div className="detail-item">
                                    <strong>Special Requests:</strong>
                                    <span>{bookingData.comments}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="confirmation-actions">
                        <Link to="/" className="btn-primary">
                            Return to Home
                        </Link>
                        <button
                            onClick={() => window.print()}
                            className="btn-secondary"
                        >
                            Print Confirmation
                        </button>
                    </div>

                    <div className="contact-info">
                        <h3>Need to make changes?</h3>
                        <p>Call us at (312) 555-0123 or email info@littlelemon.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;