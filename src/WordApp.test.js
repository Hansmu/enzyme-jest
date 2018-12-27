import React from 'react';

import {setupConnected} from "../test/test-utils";
import WordApp, {UnconnectedWordApp} from './WordApp';
import {shallow} from "enzyme";


const setup = (initialState = {}) => {
    return setupConnected(WordApp, initialState);
};

describe('redux props', () => {
    test('has access to success state', () => {
        const success = true;
        const wrapper = setup({success});
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });

    test('has access to secretWord state', () => {
        const secretWord = 'party';
        const wrapper = setup({secretWord});
        const secretWordProp = wrapper.instance().props.secretWord;
        expect(secretWordProp).toBe(secretWord);
    });

    test('has access to guessedWords state', () => {
        const guessedWords = [{guessedWord: 'train', letterMatchCount: 3}];
        const wrapper = setup({guessedWords});
        const guessedWordsProp = wrapper.instance().props.guessedWords;
        expect(guessedWordsProp).toEqual(guessedWords);
    });

    test('getSecretWord action creator is a function on the props', () => {
        const wrapper = setup();
        const getSecretWordProp = wrapper.instance().props.getSecretWord;
        expect(getSecretWordProp).toBeInstanceOf(Function);
    });
});

describe('WordApp', () => {
    const getSecretWordMock = jest.fn();
    const props = {
        getSecretWord: getSecretWordMock,
        success: false,
        guessedWords: []
    };

    test('getSecretWord runs on WordApp mount', () => {
        const wrapper = shallow(<UnconnectedWordApp {...props}/>);

        wrapper.instance().componentDidMount();

        const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

        expect(getSecretWordCallCount).toBe(1);
    })
});