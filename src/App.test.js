import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props = {}, state = null) => {
    const wrapper = shallow(<App {...props}/>);

    if (state) {
        wrapper.setState(state);
    }

    return wrapper;
};

const findByTestAttribute = (wrapper, value) => {
    return wrapper.find(`[data-test='${value}']`);
};

test('renders without crashing', () => {
  const wrapper = shallow(<App/>);
  // console.log(wrapper.debug()); //Prints out the entire DOM of the node, easier to see what's going on in your rendered wrapper
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
    const wrapper = setup();
    const button = findByTestAttribute(wrapper, 'increment-button');
    expect(button.length).toBe(1);
});

test('renders counter display', () => {
    const wrapper = setup();
    const display = findByTestAttribute(wrapper, 'counter-display');
    expect(display.length).toBe(1);
});

test('counter starts at 0', () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state('counter');
    expect(initialCounterState).toEqual(0);
});

test('clicking button increments counter display', () => {
    const counter = 7;
    const wrapper = setup(null, {counter});
    const button = findByTestAttribute(wrapper, 'increment-button');
    button.simulate('click');
    wrapper.update();
    const counterDisplay = findByTestAttribute(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(8)
});