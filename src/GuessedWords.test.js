/* eslint-disable testing-library/await-async-query */
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react'
import GuessedWords from './GuessedWords'

import {findByTestAttr, checkProps} from '../test/testUtils'
import { text } from 'express';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
    guessedWords: [{guessedWord: 'train', letterMatchCount: 3}],
}


const setup = (props={}) =>{
    const setupProps = {...defaultProps, ...props}
    return shallow(<GuessedWords {...setupProps}/>)
}

test('does not throw warnings with expected props',()=>{
    checkProps(GuessedWords, defaultProps)

})

describe('if there are no words guessed', ()=>{
    let wrapper
    beforeEach(()=>{
        wrapper = setup({guessedWords: []})
    })
    test('render without error', ()=>{
        // eslint-disable-next-line testing-library/await-async-query
        const component = findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })
    test('render instructions to guess a word', ()=>{
        const instructions = findByTestAttr(wrapper, 'guess-instructions')
        expect(instructions.text().length).not.toBe(0)
    })
})