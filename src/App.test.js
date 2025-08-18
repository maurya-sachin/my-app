import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon app', () => {
    render(<App />);
    const logoElement = screen.getByAltText(/little lemon/i);
    expect(logoElement).toBeInTheDocument();
});