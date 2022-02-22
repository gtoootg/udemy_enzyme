import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'
import App from './App'

Enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper.find("[data-test='component-app']")).toHaveLength(1)
});

test('renders increment button', () => {
  
});

test('renders counter display', () => {
  
});

test('counter display starts at 0', () => {
  
});