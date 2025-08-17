// src/__tests__/BookingForm.test.js
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

// Mock the API functions
jest.mock('../utils/api');

const mockProps = {
    availableTimes: ['17:00', '18:00', '19:00', '20:00'],
    updateTimes: jest.fn(),
    submitForm: jest.fn()
};

const renderBookingForm = (props = mockProps) => {
    return render(
        <BrowserRouter>
            <BookingForm {...props} />
        </BrowserRouter>
    );
};

describe('BookingForm', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders form elements correctly', () => {
        renderBookingForm();

        expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/special requests/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();
    });

    test('displays available times in time select', () => {
        renderBookingForm();

        const timeSelect = screen.getByLabelText(/choose time/i);
        mockProps.availableTimes.forEach(time => {
            expect(screen.getByRole('option', { name: time })).toBeInTheDocument();
        });
    });

    test('validates required fields', async () => {
        const user = userEvent.setup();
        renderBookingForm();

        const submitButton = screen.getByRole('button', { name: /make your reservation/i });
        await user.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText(/please select a date/i)).toBeInTheDocument();
            expect(screen.getByText(/please select a time/i)).toBeInTheDocument();
            expect(screen.getByText(/please select an occasion/i)).toBeInTheDocument();
        });
    });

    test('validates number of guests range', async () => {
        const user = userEvent.setup();
        renderBookingForm();

        const guestsInput = screen.getByLabelText(/number of guests/i);
        await user.clear(guestsInput);
        await user.type(guestsInput, '0');

        const submitButton = screen.getByRole('button', { name: /make your reservation/i });
        await user.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText(/number of guests must be between 1 and 10/i)).toBeInTheDocument();
        });
    });

    test('calls updateTimes when date changes', async () => {
        const user = userEvent.setup();
        const mockUpdateTimes = jest.fn();

        renderBookingForm({ ...mockProps, updateTimes: mockUpdateTimes });

        const dateInput = screen.getByLabelText(/choose date/i);
        await user.type(dateInput, '2024-12-25');

        expect(mockUpdateTimes).toHaveBeenCalled();
    });

    test('submits form with valid data', async () => {
        const user = userEvent.setup();
        const mockSubmitForm = jest.fn().mockReturnValue(true);

        renderBookingForm({ ...mockProps, submitForm: mockSubmitForm });

        await user.type(screen.getByLabelText(/choose date/i), '2024-12-25');
        await user.selectOptions(screen.getByLabelText(/choose time/i), '18:00');
        await user.clear(screen.getByLabelText(/number of guests/i));
        await user.type(screen.getByLabelText(/number of guests/i), '4');
        await user.selectOptions(screen.getByLabelText(/occasion/i), 'Birthday');
        await user.type(screen.getByLabelText(/special requests/i), 'Window table please');

        await user.click(screen.getByRole('button', { name: /make your reservation/i }));

        await waitFor(() => {
            expect(mockSubmitForm).toHaveBeenCalledWith({
                date: '2024-12-25',
                time: '18:00',
                guests: 4,
                occasion: 'Birthday',
                comments: 'Window table please'
            });
        });
    });
});