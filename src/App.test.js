import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

it('renders without crashing', () => {
  const wrapper = shallow(<App/>);
  console.log(wrapper.debug()); //Prints out the entire DOM of the node, easier to see what's going on in your rendered wrapper
  expect(wrapper).toBeTruthy();
});
