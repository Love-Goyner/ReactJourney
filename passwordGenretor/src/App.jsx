import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()[]{}|/><`~"

    for (let i = 0; i <= length; i++) {
      let charNumber = Math.floor(Math.random()*str.length + 1)
      pass +=   str.charAt(charNumber)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(()=>{
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyButton = useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={password}
          className='outline-none w-full py-2 px-3'
          placeholder='Password'
          readOnly 
          ref={passRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyButton}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            className='cursor-pointer'
             type="range"
             min= {6}
             max= {90}
             value={length}
             onChange={(e) => {setLength(e.target.value)}}
             />
             <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="charInput">Special-Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
