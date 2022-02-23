import React,{useState} from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App" data-test="component-app">
      <h1 id={count} data-test="counter-display">
        counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      <button data-test="increment-button" onClick={()=>setCount(count+1)}>Increment counter</button>
    </div>
  );
}

export default App;
