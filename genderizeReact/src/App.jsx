import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}



function Genderize(){

  const [gender, setGender] = useState(false);
  const [name, setName] = useState('');
 
  

  return(
    <>
    <h1>GENDERIZE</h1>
    <form action="" onSubmit={(event)=>event.preventDefault()}>
      <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='введите имя' />
      <Button 
      buttonText={"Узнать пол"}
      onClick={()=> setGender(true)}
      />
      {gender  && <ReturnName name={name}/>}
    </form>
    </>
    
  )
}

function Button({buttonText, onClick}){
  return(
    <button onClick={()=>onClick()}>{buttonText}</button>
  )
}


function ReturnName({name}){  
  return(
    <div className='result'>
      {name} is 
    </div>
  )

}

export default Genderize
