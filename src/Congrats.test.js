import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';
import {findByTestAttribute, setup} from "../test/test-utils";

Enzyme.configure({adapter: new EnzymeAdapter()});

const setupCongrats = (props = {}, state = null) => {
    return setup(Congrats);
};

test('renders without error', () => {
    const wrapper = setupCongrats();
    const component = findByTestAttribute(wrapper, 'component-congrats');
    expect(component).toHaveLength(1);
});

test('renders no text when success prop is false', () => {
    const wrapper = setupCongrats({success: false});
    const component = findByTestAttribute(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

test('renders non-empty congrats message when success is true', () => {
    const wrapper = setupCongrats({success: true});
    const message = findByTestAttribute(wrapper, 'congrats-message');
    // expect(message.text())
});