/* eslint-disable testing-library/await-async-query */
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'
import Congrats from './Congrats'

import {findByTestAttr} from './test/testUtils'
import { text } from 'express';

Enzyme.configure({ adapter: new Adapter() });

const setup = (props={}) => {
    return shallow(<Congrats {...props}/>)
}

test('no error', ()=>{
    const wrapper = setup()
    const component = findByTestAttr(wrapper,'component-congrats')
    expect(component.length).toBe(1)
})

test('renders no text when success prop is false', ()=>{
    const wrapper = setup({success : false})
    const component = findByTestAttr(wrapper,'component-congrats')
    expect(component.text()).toBe('')
})

test('renders text when success prop is true', ()=>{
    const wrapper = setup({success : true})
    const component = findByTestAttr(wrapper,'component-congrats')
    expect(component.text()).toBe('congratulations!')
})

test('renders non-empty congrats message when success prop is true', ()=>{})