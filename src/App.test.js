import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon app', () => {
    render(<App />);
    const headerLogo = screen.getAllByAltText(/little lemon/i)[0];
    expect(headerLogo).toBeInTheDocument();
    expect(headerLogo).toHaveClass('logo');
});

test('renders main hero heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1, name: /little lemon/i });
    expect(heading).toBeInTheDocument();
});

test('renders reserve button', () => {
    render(<App />);
    const reserveButton = screen.getByRole('link', { name: /reserve a table/i });
    expect(reserveButton).toBeInTheDocument();
});