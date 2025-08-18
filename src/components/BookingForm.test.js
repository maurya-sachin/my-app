import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

describe('BookingForm', () => {
    beforeEach(() => {
        mockDispatch.mockClear();
        mockSubmitForm.mockClear();
    });

    test('renders booking form', () => {
        render(
            <BookingForm
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );

        expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    });

    test('validates required fields', () => {
        render(
            <BookingForm
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );

        const submitButton = screen.getByRole('button', { name: /make your reservation/i });
        fireEvent.click(submitButton);

        expect(mockSubmitForm).not.toHaveBeenCalled();
    });

    test('calls dispatch when date changes', () => {
        render(
            <BookingForm
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );

        const dateInput = screen.getByLabelText(/choose date/i);
        fireEvent.change(dateInput, { target: { value: '2024-12-25' } });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'UPDATE_TIMES',
            date: '2024-12-25'
        });
    });

    test('shows available times in select', () => {
        render(
            <BookingForm
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );

        const timeSelect = screen.getByLabelText(/choose time/i);
        mockAvailableTimes.forEach(time => {
            expect(screen.getByDisplayValue(time)).toBeInTheDocument();
        });
    });

    test('validates email format', () => {
        render(
            <BookingForm
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );

        const emailInput = screen.getByLabelText(/email/i);
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

        const submitButton = screen.getByRole('button', { name: /make your reservation/i });
        fireEvent.click(submitButton);

        expect(mockSubmitForm).not.toHaveBeenCalled();
    });
});