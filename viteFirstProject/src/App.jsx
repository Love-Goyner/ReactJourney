import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(22)

  const addValue = ()=>{
    if(count<20){
      setCount(count+1);
    }
  }

  const removeValue = ()=>{
    if(count>0){
      setCount(count-1);
    }
  }


  return (
    <>
      <h1>Love and React</h1>
      <br/>
      <h2>Counter Value : {count}</h2>
      <br />
      <button onClick={addValue}>Add Value</button>
      <br /><br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
