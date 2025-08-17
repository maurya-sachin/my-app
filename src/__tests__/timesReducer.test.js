// src/__tests__/timesReducer.test.js
import { fetchAPI } from '../utils/api';

jest.mock('../utils/api');

const timesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return fetchAPI(action.date);
        default:
            return state;
    }
};

const initializeTimes = () => {
    return fetchAPI(new Date());
};

describe('Times Reducer', () => {
    beforeEach(() => {
        fetchAPI.mockReturnValue(['17:00', '17:30', '18:00', '18:30']);
    });

    test('initializeTimes returns the correct expected value', () => {
        const result = initializeTimes();
        expect(result).toEqual(['17:00', '17:30', '18:00', '18:30']);
    });

    test('updateTimes returns new times for given date', () => {
        const initialState = ['17:00', '18:00'];
        const action = { type: 'UPDATE_TIMES', date: new Date('2024-12-25') };

        const newState = timesReducer(initialState, action);

        expect(fetchAPI).toHaveBeenCalledWith(action.date);
        expect(newState).toEqual(['17:00', '17:30', '18:00', '18:30']);
    });

    test('reducer returns state for unknown action', () => {
        const initialState = ['17:00', '18:00'];
        const action = { type: 'UNKNOWN_ACTION' };

        const newState = timesReducer(initialState, action);

        expect(newState).toEqual(initialState);
    });
});