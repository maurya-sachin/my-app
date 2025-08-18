import { render, screen } from '@testing-library/react';
import BookingTable from './BookingTable';

const mockBookingData = [
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
        status: 'pending'
    }
];

describe('BookingTable', () => {
    test('renders booking table with data', () => {
        render(<BookingTable bookingData={mockBookingData} />);

        expect(screen.getByText('Current Reservations')).toBeInTheDocument();
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Sarah Johnson')).toBeInTheDocument();
        expect(screen.getByText('2024-08-20')).toBeInTheDocument();
        expect(screen.getByText('18:00')).toBeInTheDocument();
    });

    test('renders table headers correctly', () => {
        render(<BookingTable bookingData={mockBookingData} />);

        expect(screen.getByText('Date')).toBeInTheDocument();
        expect(screen.getByText('Time')).toBeInTheDocument();
        expect(screen.getByText('Guests')).toBeInTheDocument();
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('Phone')).toBeInTheDocument();
        expect(screen.getByText('Occasion')).toBeInTheDocument();
        expect(screen.getByText('Status')).toBeInTheDocument();
    });

    test('displays no bookings message when array is empty', () => {
        render(<BookingTable bookingData={[]} />);

        expect(screen.getByText('No reservations found.')).toBeInTheDocument();
    });

    test('displays no bookings message when data is null', () => {
        render(<BookingTable bookingData={null} />);

        expect(screen.getByText('No reservations found.')).toBeInTheDocument();
    });

    test('displays booking status correctly', () => {
        render(<BookingTable bookingData={mockBookingData} />);

        expect(screen.getByText('Confirmed')).toBeInTheDocument();
        expect(screen.getByText('Pending')).toBeInTheDocument();
    });

    test('displays occasion or N/A when not provided', () => {
        const dataWithoutOccasion = [
            {
                date: '2024-08-20',
                time: '18:00',
                guests: 4,
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@email.com',
                phone: '(555) 123-4567',
                status: 'confirmed'
            }
        ];

        render(<BookingTable bookingData={dataWithoutOccasion} />);

        expect(screen.getByText('N/A')).toBeInTheDocument();
    });
});