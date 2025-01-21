import { useState ,useCallback, useEffect,useRef } from 'react'


function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed,setNumberAllowed] =useState(false)
  const [charAllowed,setcharAllowed] =useState(false)
  const [password,setpassword] = useState("")

// use ref hook
const passwordRef =useRef(null);

const passwordGenerator=useCallback(()=>{
  let pass =""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (numberAllowed) {
    str=str+"0123456789";
  }
  if (charAllowed) {
    str=str+"!@#$%^&*()_-?><[]{}/";
  }
  for (let i = 1; i <= length; i++) {
    let char =Math.floor(Math.random()*str.length+1)
     pass = pass+str[char];
    // pass+=str.charAt(char);
  }
  setpassword(pass);
},[length,numberAllowed,charAllowed,setpassword]);

const copyPasswordToClipbord = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,50)
  window.navigator.clipboard.writeText(password)
},[password]) 

useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 ">
      <h1 className='text-white text-center my-3'>Password generator</h1>

    <div className="flex shadow rounded-xl overflow-hidden mb-4 border-2 border-gray-600">

        <input
         className="outline-none w-full py-1 px-3 rounded-l-xl" 
         type="text"
         value={password}
         placeholder='password'
         readOnly
         ref={passwordRef}
         />

         <button
          onClick={copyPasswordToClipbord} 
         className='outline-none bg-blue-700 text-white rounded-l-none rounded-r-xl'
         >Copy</button>

       </div>

       <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type='range'
        min={6}
        max={50}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)} }
          />
          <label>Length:{length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setcharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
