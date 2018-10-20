import {shallow} from "enzyme/build";
import React from "react";
import checkPropTypesExternal from 'check-prop-types';

export const setup = (Component, props = {}, state = null) => {
    const wrapper = shallow(<Component {...props}/>);

    if (state) {
        wrapper.setState(state);
    }

    return wrapper;
};

export const findByTestAttribute = (wrapper, value) => {
    return wrapper.find(`[data-test='${value}']`);
};

export const checkPropTypes = (component, expectedProps) => {
    const propError = checkPropTypesExternal(component.propTypes, expectedProps, 'prop', component.name);
    expect(propError).toBeUndefined();
};