/* eslint-disable testing-library/await-async-query */
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'
import App from './App'

Enzyme.configure({ adapter: new Adapter() });

const setup = ()=>shallow(<App/>)

const findByTestAttr = (wrapper, val)=> wrapper.find(`[data-test='${val}']`)
 
test('renders learn react link', () => {
  const wrapper = setup()
  // eslint-disable-next-line testing-library/await-async-query
  const appComponent = findByTestAttr(wrapper,"component-app")
  expect(appComponent).toHaveLength(1)
});


test('renders counter display', () => {
  
});

test('counter display starts at 0', () => {
  const wrapper = setup()
  const count = findByTestAttr(wrapper, "count").text()
  expect(count).toBe("0")
});

test('click button increments counter display', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, "increment-button")
  button.simulate('click')

  const count = findByTestAttr(wrapper, "count").text()
  expect(count).toBe("1")
});

test('id of h1 tag changes after increment', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, "increment-button")
  button.simulate('click')

  const id = findByTestAttr(wrapper, "counter-display")
  expect(id.get(0).props.id).toBe(1)
});
