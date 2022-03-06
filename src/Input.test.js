/* eslint-disable testing-library/await-async-query */
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'
import Input from './Input'

import {findByTestAttr, checkProps} from '../test/testUtils'


Enzyme.configure({ adapter: new Adapter() });

const setup = (secretWord='party') => {
    return shallow(<Input secretWord={secretWord}/>)
}

test('render with no error', ()=>{
    const wrapper = setup()
    const inputComponent = findByTestAttr(wrapper,'component-input')
    expect(inputComponent.length).toBe(1)
})

test('does not throw warning with expected props', ()=>{
    checkProps(Input, {secretWord:'party'})
})