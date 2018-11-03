import {actionTypes} from "../actions";
import successReducer from './successReducer';

describe('Success reducer test', () => {
    test('returns default initial state when no action passed', () => {
        const newState = successReducer();
        expect(newState).toBe(false);
    });

    test('returns state of true upon receiving an action of type CORRECT_GUESS', () => {
        const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS});
        expect(newState).toBe(true);
    });
});