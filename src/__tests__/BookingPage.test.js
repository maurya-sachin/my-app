// src/__tests__/BookingPage.test.js
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingPage from '../components/BookingPage';

const renderBookingPage = () => {
    return render(
        <BrowserRouter>
            <BookingPage />
        </BrowserRouter>
    );
};

describe('BookingPage', () => {
    test('renders booking page title', () => {
        renderBookingPage();
        expect(screen.getByText(/reserve a table/i)).toBeInTheDocument();
    });

    test('renders booking form', () => {
        renderBookingPage();
        expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    });
});