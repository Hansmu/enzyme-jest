import React from 'react';

import {findByTestAttribute, setupConnected} from "../test/test-utils";
import Input from './Input';


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
