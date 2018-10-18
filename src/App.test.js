import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

test('renders without crashing', () => {
  const wrapper = shallow(<App/>);
  // console.log(wrapper.debug()); //Prints out the entire DOM of the node, easier to see what's going on in your rendered wrapper
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {

});

test('renders counter display', () => {

});

test('counter starts at 0', () => {

});

test('clicking button increments counter display', () => {

});