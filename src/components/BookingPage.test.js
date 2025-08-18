import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingPage, { initializeTimes, updateTimes } from './BookingPage';

const BookingPageWithRouter = () => (
    <BrowserRouter>
        <BookingPage />
    </BrowserRouter>
);

describe('BookingPage', () => {
    test('renders booking page', () => {
        render(<BookingPageWithRouter />);
        expect(screen.getByText(/reserve a table/i)).toBeInTheDocument();
    });

    test('renders booking form', () => {
        render(<BookingPageWithRouter />);
        expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    });

    test('initializeTimes returns available times', () => {
        const times = initializeTimes();
        expect(Array.isArray(times)).toBe(true);
        expect(times.length).toBeGreaterThan(0);
        times.forEach(time => {
            expect(typeof time).toBe('string');
            expect(time).toMatch(/^\d{2}:\d{2}$/);
        });
    });

    test('updateTimes returns same state for unknown action', () => {
        const initialState = ['17:00', '18:00'];
        const action = { type: 'UNKNOWN_ACTION' };
        const newState = updateTimes(initialState, action);
        expect(newState).toEqual(initialState);
    });

    test('updateTimes returns new times for UPDATE_TIMES action', () => {
        const initialState = ['17:00', '18:00'];
        const action = { type: 'UPDATE_TIMES', date: '2024-12-25' };
        const newState = updateTimes(initialState, action);
        expect(Array.isArray(newState)).toBe(true);
        expect(newState.length).toBeGreaterThan(0);
    });

    test('updateTimes returns same state when no date provided', () => {
        const initialState = ['17:00', '18:00'];
        const action = { type: 'UPDATE_TIMES' };
        const newState = updateTimes(initialState, action);
        expect(newState).toEqual(initialState);
    });
});