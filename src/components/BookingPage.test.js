import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingPage, { initializeTimes, updateTimes } from './BookingPage';

// Mock the API functions for testing
window.fetchAPI = jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
window.submitAPI = jest.fn(() => true);

const BookingPageWithRouter = () => (
    <BrowserRouter>
        <BookingPage />
    </BrowserRouter>
);

describe('BookingPage', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders booking page', () => {
        render(<BookingPageWithRouter />);
        expect(screen.getByText(/reserve a table/i)).toBeInTheDocument();
    });

    test('renders booking form', () => {
        render(<BookingPageWithRouter />);
        expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    });

    test('initializeTimes calls fetchAPI with today\'s date', () => {
        const times = initializeTimes();
        expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
        expect(Array.isArray(times)).toBe(true);
    });

    test('updateTimes returns same state for unknown action', () => {
        const initialState = ['17:00', '18:00'];
        const action = { type: 'UNKNOWN_ACTION' };
        const newState = updateTimes(initialState, action);
        expect(newState).toEqual(initialState);
    });

    test('updateTimes calls fetchAPI for UPDATE_TIMES action', () => {
        const initialState = ['17:00', '18:00'];
        const action = { type: 'UPDATE_TIMES', date: '2024-12-25' };
        const newState = updateTimes(initialState, action);

        expect(window.fetchAPI).toHaveBeenCalledWith(new Date('2024-12-25'));
        expect(Array.isArray(newState)).toBe(true);
    });

    test('updateTimes returns same state when no date provided', () => {
        const initialState = ['17:00', '18:00'];
        const action = { type: 'UPDATE_TIMES' };
        const newState = updateTimes(initialState, action);
        expect(newState).toEqual(initialState);
    });
});