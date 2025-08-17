// src/components/BookingPage.js
import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../utils/api';

const timesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return fetchAPI(action.date);
        default:
            return state;
    }
};

const initializeTimes = () => {
    return fetchAPI(new Date());
};

const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);
    const navigate = useNavigate();

    const updateTimes = (selectedDate) => {
        dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    };

    const submitForm = (formData) => {
        const isSubmitted = submitAPI(formData);
        if (isSubmitted) {
            navigate('/confirmation', { state: { bookingData: formData } });
            return true;
        }
        return false;
    };

    return (
        <div className="booking-page">
            <div className="container">
                <div className="booking-content">
                    <div className="booking-header">
                        <h1>Reserve a Table</h1>
                        <p>Experience the flavors of the Mediterranean at Little Lemon</p>
                    </div>
                    <BookingForm
                        availableTimes={availableTimes}
                        updateTimes={updateTimes}
                        submitForm={submitForm}
                    />
                </div>
            </div>
        </div>
    );
};

export default BookingPage;