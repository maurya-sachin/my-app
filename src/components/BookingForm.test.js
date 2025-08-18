import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

describe('BookingForm', () => {
    beforeEach(() => {
        mockDispatch.mockClear();
        mockSubmitForm.mockClear();
        mockSubmitForm.mockReturnValue(true);
        jest.clearAllMocks();
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
            expect(screen.getByRole('option', { name: time })).toBeInTheDocument();
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

    test('submits form with valid data', () => {
        render(
            <BookingForm
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );

        fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-12-25' } });
        fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '18:00' } });
        fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'John' } });
        fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' } });
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '1234567890' } });

        const submitButton = screen.getByRole('button', { name: /make your reservation/i });
        fireEvent.click(submitButton);

        expect(mockSubmitForm).toHaveBeenCalled();
        expect(global.alert).toHaveBeenCalledWith('Reservation confirmed!');
    });
});