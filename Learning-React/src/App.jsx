import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [allowNumber, setAllowNumber] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() =>{
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(allowNumber) str += "0123456789"
    if(charAllow) str += "!@#$%&*(){}"
    
    for( let i = 1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length )

      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, allowNumber,charAllow, setPassword])

  useEffect(()=> {
    passwordGenerator()
  }, [length, allowNumber,charAllow,passwordGenerator])
  
  // useRef Hook

  const passwordRef = useRef(null)
  
  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,15);
    window.navigator.clipboard.writeText(password)
    alert("Password copied to clipboard")
  }, [])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 my-8 bg-gray-500'>
        <h1 className='text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type='text'
          value={password}
          className='bg-white outline-none w-full py-1 px-3'
          placeholder='password'
          ref={passwordRef}
          readOnly></input>
          <button
            onClick={copyPassword}
          className='outline-none bg-blue-700 text-white px-3 py-o.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-1'>
          <input type="range"
          min={8}
          max={15}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)} } />
            <label>Length: {length} </label>
          <div className='flex items-baseline gap-x-1'>
            <input type='checkbox'
              defaultChecked={allowNumber}
              id='numberInput'
              onChange={() => {setAllowNumber((prev) => !prev)}}
            />
            <label htmlFor='characterInput'>Number</label>

            <input type='checkbox'
              defaultChecked={charAllow}
              id='numberInput'
              onChange={() => {setCharAllow((prev) => !prev)}}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
