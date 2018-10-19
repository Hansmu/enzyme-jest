import {shallow} from "enzyme/build";
import React from "react";

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