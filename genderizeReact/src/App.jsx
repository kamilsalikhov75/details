import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { getGender } from './GetGender'

import './App.css'

function App(){

  const [name, setName] = useState('')
  const [gender, setGender] = useState('');

  useEffect(()=>{
    const savedName = localStorage.getItem("name");
    const savedGender = localStorage.getItem("gender");

    if (savedName) setName(savedName);
    if (savedGender) setGender(savedGender);

  }, [])

  const fetchGender = async() => {
    const result = await getGender(name);
    result == 'male' ? setGender('мужской') : setGender('женский');

  }

  useEffect(()=>{
    localStorage.setItem("name", name);
    localStorage.setItem("gender", gender);
    
  }, [name, gender])

  return(
    <>
    <h1>GENDERIZE</h1>
    <form action="" onSubmit={(event)=>event.preventDefault()}>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='введите имя' />
      <button onClick={fetchGender}>Узнать пол</button>
    </form>
    {gender && <p> {name} - Пол: {gender }</p>}
    
    </>
    
  )
}

export default App
