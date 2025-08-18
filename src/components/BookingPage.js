import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const submitAPI = function (formData) {
    return true;
};

export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            if (action.date) {
                const selectedDate = new Date(action.date);
                return fetchAPI(selectedDate);
            }
            return state;
        default:
            return state;
    }
};

const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const submitForm = (formData) => {
        return submitAPI(formData);
    };

    return (
        <section className="reservation">
            <div className="container">
                <h2>Reserve a Table</h2>
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