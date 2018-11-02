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

describe('if there are no words guessed', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setupWrapper({guessedWords: []});
    });

    test('renders without error', () => {
        const component = findByTestAttribute(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttribute(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });
});

describe('if there are words guessed', () => {
    let wrapper;

    beforeEach(() => {
        const guessedWords = [
            {guessedWord: 'train', letterMatchCount: 3},
            {guessedWord: 'agile', letterMatchCount: 1},
            {guessedWord: 'party', letterMatchCount: 5}
        ];

        wrapper = setupWrapper({guessedWords});
    });

    test('renders without error', () => {
        const component = findByTestAttribute(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test('renders guessed words section', () => {
        const guessedWordsNode = findByTestAttribute(wrapper, 'guessed-words');
        expect(guessedWordsNode.length).toBe(1);
    });

    test('correct number of guessed words', () => {
        const guessedWordsNodes = findByTestAttribute(wrapper, 'guessed-word');
        expect(guessedWordsNodes.length).toBe(3);
    });
});