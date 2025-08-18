import React, { useReducer, useState } from 'react';
import BookingForm from './BookingForm';
import BookingTable from './BookingTable';

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

const initialBookingData = [
    {
        date: '2024-08-20',
        time: '18:00',
        guests: 4,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@email.com',
        phone: '(555) 123-4567',
        occasion: 'Anniversary',
        status: 'confirmed'
    },
    {
        date: '2024-08-22',
        time: '19:30',
        guests: 2,
        firstName: 'Sarah',
        lastName: 'Johnson',
        email: 'sarah.j@email.com',
        phone: '(555) 987-6543',
        occasion: 'Birthday',
        status: 'confirmed'
    },
    {
        date: '2024-08-25',
        time: '20:00',
        guests: 6,
        firstName: 'Mike',
        lastName: 'Chen',
        email: 'mike.chen@email.com',
        phone: '(555) 456-7890',
        occasion: 'Business',
        status: 'pending'
    }
];

const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const [bookingData, setBookingData] = useState(initialBookingData);

    const submitForm = (formData) => {
        const success = submitAPI(formData);
        if (success) {
            const newBooking = {
                ...formData,
                status: 'confirmed'
            };
            setBookingData(prev => [...prev, newBooking]);
        }
        return success;
    };

    const confirmedBookings = bookingData.filter(booking => booking.status === 'confirmed').length;
    const pendingBookings = bookingData.filter(booking => booking.status === 'pending').length;
    const totalBookings = bookingData.length;

    return (
        <section className="reservation">
            <div className="container">
                <h2>Reserve a Table</h2>

                <div className="booking-summary">
                    <div className="summary-card">
                        <h4>Total Reservations</h4>
                        <div className="number">{totalBookings}</div>
                    </div>
                    <div className="summary-card">
                        <h4>Confirmed</h4>
                        <div className="number">{confirmedBookings}</div>
                    </div>
                    <div className="summary-card">
                        <h4>Pending</h4>
                        <div className="number">{pendingBookings}</div>
                    </div>
                </div>

                <BookingForm
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    submitForm={submitForm}
                />

                <BookingTable bookingData={bookingData} />
            </div>
        </section>
    );
};

export default BookingPage;