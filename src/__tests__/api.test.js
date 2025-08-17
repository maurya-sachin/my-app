// src/__tests__/api.test.js
import { fetchAPI, submitAPI } from '../utils/api';

describe('API functions', () => {
    test('fetchAPI returns available times for a given date', () => {
        const testDate = new Date('2024-12-25');
        const times = fetchAPI(testDate);

        expect(Array.isArray(times)).toBe(true);
        expect(times.length).toBeGreaterThan(0);

        // Check that all times are in correct format
        times.forEach(time => {
            expect(time).toMatch(/^\d{2}:(00|30)$/);
        });
    });

    test('fetchAPI returns consistent results for same date', () => {
        const testDate = new Date('2024-12-25');
        const times1 = fetchAPI(testDate);
        const times2 = fetchAPI(testDate);

        expect(times1).toEqual(times2);
    });

    test('submitAPI returns true when called', () => {
        const formData = {
            date: '2024-12-25',
            time: '18:00',
            guests: 4,
            occasion: 'Birthday',
            comments: 'Test reservation'
        };

        const result = submitAPI(formData);
        expect(result).toBe(true);
    });
}); 