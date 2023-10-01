import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { getGender } from './GetGender'

import './App.css'

function App(){

  const [name, setName] = useState('')
  const [gender, setGender] = useState('');


  const fetchGender = async() => {
    const result = await getGender(name);
    console.log(result)
    result == 'male' ? setGender('мужской') : setGender('женский')


  }

  return(
    <>
    <h1>GENDERIZE</h1>
    <form action="" onSubmit={(event)=>event.preventDefault()}>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='введите имя' />
      <button onClick={fetchGender}>Узнать пол</button>
    </form>
    {gender && <p>Пол: {gender }</p>}
    
    </>
    
  )
}

export default App
