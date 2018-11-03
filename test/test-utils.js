import {shallow} from "enzyme/build";
import React from "react";
import checkPropTypesExternal from 'check-prop-types';

import rootReducer from '../src/reducers';
import {createStore} from "redux";

export const setupConnected = (Component, initialState = {}, props = {}, state = null) => {
    const store = storeFactory(initialState);
    const nestedComponent = shallow(<Component store={store} {...props}/>).dive();

    if (state) {
        nestedComponent.setState(state);
    }

    return nestedComponent;

};

const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState);
};

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

