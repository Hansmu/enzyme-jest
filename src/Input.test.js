import React from 'react';

import {findByTestAttribute, setupConnected} from "../test/test-utils";
import Input, {UnconnectedInput} from './Input';
import {shallow} from "enzyme";


const setup = (initialState = {}) => {
    return setupConnected(Input, initialState);
};

describe('Input render', () => {
    describe('word has not been guessed', () => {
        let wrapper;

        beforeEach(() => {
            const initialState = {success: false};
            wrapper = setup(initialState);
        });

        test('renders component without error', () => {
            const component = findByTestAttribute(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });

        test('renders input box', () => {
            const component = findByTestAttribute(wrapper, 'input-box');
            expect(component.length).toBe(1);
        });

        test('renders submit button', () => {
            const component = findByTestAttribute(wrapper, 'submit-button');
            expect(component.length).toBe(1);
        });
    });

    describe('word has been guessed', () => {
        let wrapper;

        beforeEach(() => {
            const initialState = {success: true};
            wrapper = setup(initialState);
        });

        test('renders component without error', () => {
            const component = findByTestAttribute(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });

        test('renders no input box', () => {
            const component = findByTestAttribute(wrapper, 'input-box');
            expect(component.length).toBe(0);
        });

        test('renders no submit button', () => {
            const component = findByTestAttribute(wrapper, 'submit-button');
            expect(component.length).toBe(0);
        });
    });
});

describe('redux props', () => {
    test('has success piece of state as prop', () => {
        const success = true;
        const wrapper = setup({success});
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });

    test('guessWord action creator is a function prop', () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    });
});

describe('guessWord action creator call', () => {
    test('calls guessWord when button is clicked', () => {
        const guessWordMock = jest.fn();

        const props = {
            guessWord: guessWordMock
        };

        const wrapper = shallow(<UnconnectedInput {...props}/>);

        const submitButton = findByTestAttribute(wrapper, 'submit-button');
        submitButton.props().onClick();

        const guessWordCallCount = guessWordMock.mock.calls.length;

        expect(guessWordCallCount).toBe(1);
    });
});
