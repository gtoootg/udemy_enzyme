import React,{useState} from 'react'

import Congrats from './Congrats'
import GuessedWords from './GuessedWords';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className="container" data-test="component-app">
      <h1>jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[{guessedWord: 'train', letterMatchCount: 3}]} />
      {/* <h1 id={count} data-test="counter-display">
        counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      <button data-test="increment-button" onClick={()=>setCount(count+1)}>Increment counter</button> */}
    </div>
  );
}

export default App;
