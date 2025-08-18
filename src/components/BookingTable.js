import React from 'react';

const BookingTable = ({ bookingData }) => {
    if (!bookingData || bookingData.length === 0) {
        return (
            <div className="booking-table-container">
                <h3>Current Reservations</h3>
                <p className="no-bookings">No reservations found.</p>
            </div>
        );
    }

    return (
        <div className="booking-table-container">
            <h3>Current Reservations</h3>
            <div className="booking-table-wrapper">
                <table className="booking-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Guests</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Occasion</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingData.map((booking, index) => (
                            <tr key={index} className="booking-row">
                                <td>{booking.date}</td>
                                <td>{booking.time}</td>
                                <td>{booking.guests}</td>
                                <td>{`${booking.firstName} ${booking.lastName}`}</td>
                                <td>{booking.email}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.occasion || 'N/A'}</td>
                                <td>
                                    <span className={`status ${booking.status || 'confirmed'}`}>
                                        {booking.status || 'Confirmed'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingTable;