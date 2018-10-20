import React from 'react';

import Congrats from './Congrats';
import {checkPropTypes, findByTestAttribute, setup} from "../test/test-utils";

const setupCongrats = (props = {}, state = null) => {
    const setupProps = {
        success: false,
        ...props
    };
    return setup(Congrats, setupProps, state);
};

test('renders without error', () => {
    const wrapper = setupCongrats();
    const component = findByTestAttribute(wrapper, 'component-congrats');
    expect(component).toHaveLength(1);
});

test('renders no text when success prop is false', () => {
    const wrapper = setupCongrats();
    const component = findByTestAttribute(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

test('renders non-empty congrats message when success is true', () => {
    const wrapper = setupCongrats({success: true});
    const message = findByTestAttribute(wrapper, 'congrats-message');
    expect(message).toHaveLength(1);
    expect(message.text().length).toBeTruthy();
});

test('does not throw warning with expected props', () => {
    const expectedProps = {success: false};
    checkPropTypes(Congrats, expectedProps);
});