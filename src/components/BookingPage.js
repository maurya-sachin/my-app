/* global fetchAPI, submitAPI */
import React, { useReducer, useState, useEffect } from 'react';
import BookingForm from './BookingForm';

// Fallback times in case API is not available
const fallbackTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

const waitForAPI = (maxWait = 5000) => {
    return new Promise((resolve) => {
        const startTime = Date.now();

        const checkAPI = () => {
            if (window.fetchAPI && window.submitAPI) {
                resolve(true);
            } else if (Date.now() - startTime > maxWait) {
                console.warn('External API not loaded within timeout, using fallback');
                resolve(false);
            } else {
                setTimeout(checkAPI, 100);
            }
        };

        checkAPI();
    });
};

// Initialize times using fetchAPI for today's date
export const initializeTimes = () => {
    const today = new Date();
    if (window.fetchAPI) {
        try {
            const times = window.fetchAPI(today);
            return times && times.length > 0 ? times : fallbackTimes;
        } catch (error) {
            console.warn('Error calling fetchAPI, using fallback times:', error);
            return fallbackTimes;
        }
    }
    console.warn('fetchAPI not available, using fallback times');
    return fallbackTimes;
};

// Reducer to update times
export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            if (action.date) {
                try {
                    const selectedDate = new Date(action.date);
                    if (isNaN(selectedDate.getTime())) {
                        console.warn('Invalid date provided:', action.date);
                        return state;
                    }

                    if (window.fetchAPI) {
                        const times = window.fetchAPI(selectedDate);
                        return times && times.length > 0 ? times : fallbackTimes;
                    }
                    console.warn('fetchAPI not available, using fallback times');
                    return fallbackTimes;
                } catch (error) {
                    console.warn('Error updating times:', error);
                    return state;
                }
            }
            return state;
        case 'INITIALIZE_TIMES':
            return action.times || fallbackTimes;
        default:
            return state;
    }
};

const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, fallbackTimes);
    const [apiReady, setApiReady] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // 👇 Attach functions from api.js (if available) to window
    useEffect(() => {
        if (typeof window.fetchAPI === "undefined" && typeof fetchAPI !== "undefined") {
            window.fetchAPI = fetchAPI;
        }
        if (typeof window.submitAPI === "undefined" && typeof submitAPI !== "undefined") {
            window.submitAPI = submitAPI;
        }
    }, []);

    // 👇 Wait for API, then initialize times
    useEffect(() => {
        const initializeAPI = async () => {
            const apiLoaded = await waitForAPI();
            setApiReady(apiLoaded);

            if (apiLoaded) {
                const times = initializeTimes();
                dispatch({ type: 'INITIALIZE_TIMES', times });
            }

            setIsLoading(false);
        };

        initializeAPI();
    }, []);

    const submitForm = (formData) => {
        if (window.submitAPI) {
            try {
                const result = window.submitAPI(formData);
                console.log('Form submitted successfully:', result);
                return result;
            } catch (error) {
                console.warn('Error submitting form:', error);
                return false;
            }
        }
        console.warn('submitAPI not available, using fallback');
        console.log('Form submitted (fallback):', formData);
        return true;
    };

    if (isLoading) {
        return (
            <section className="reservation">
                <div className="container">
                    <h2>Reserve a Table</h2>
                    <p>Loading available times...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="reservation">
            <div className="container">
                <h2>Reserve a Table</h2>
                {!apiReady && (
                    <div
                        style={{
                            backgroundColor: '#fff3cd',
                            color: '#856404',
                            padding: '10px',
                            marginBottom: '20px',
                            borderRadius: '5px',
                            border: '1px solid #ffeaa7',
                        }}
                    >
                        <small>⚠️ Note: Using fallback booking system (API not available)</small>
                    </div>
                )}
                <BookingForm
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    submitForm={submitForm}
                />
            </div>
        </section>
    );
};

export default BookingPage;
