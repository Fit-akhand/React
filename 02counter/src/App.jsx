import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [counter,setCounter] = useState(15);
// let counter =15 ;

const addValue =()=> {
  console.log(`clicked add ${counter}`);
  
//  counter =counter +1; 
 setCounter(counter+1);
}

const subValue =()=> {
  console.log(`clicked sub ${counter}`);

  // counter =counter - 1; 
 setCounter(counter-1);

 }
  return (
    <>
      <h1>Akhand aur react</h1>
      <h2>counter value :{counter}</h2>
      <button
      onClick={addValue}
      >add value</button>
      <br/>
      <button onClick={subValue}>remove value</button>
      <p>paragraph {counter}</p>
      <div>div {counter}</div>
    </>
  )
}

export default App
