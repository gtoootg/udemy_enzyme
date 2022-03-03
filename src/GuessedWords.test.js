import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'
import GuessedWords from './GuessedWords'

import {findByTestAttr, checkProps} from '../test/testUtils'
import { text } from 'express';

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

