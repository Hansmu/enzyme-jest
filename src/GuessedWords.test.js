import React from 'react';
import {findByTestAttribute, checkPropTypes, setup} from '../test/test-utils';

import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{guessedWord: 'train', letterMatchCount: 3}]
};

const setupWrapper = (props = {}, state = null) => {
    const setupProps = {
        ...defaultProps,
        ...props
    };
    return setup(GuessedWords, setupProps, state);
};

test('should render without error', () => {
    const wrapper = setupWrapper();
    expect(wrapper).toHaveLength(1);
});

test('should not throw warning with expected props', () => {
    checkPropTypes(GuessedWords, defaultProps);
});