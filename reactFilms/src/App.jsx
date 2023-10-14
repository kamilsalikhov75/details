import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './Button'
import { Login } from './Login'
import { Registration } from './Registration'
import { CompleteAuthorization } from './CompleteAuthorization'
import { Header } from './Header'
import { Filter } from './Filter'
import { getGenres } from './Genres'

function App() {

  const [activeMod, setActiveMod] = useState(null);

  return (
    <div id='wrapper' className='wrapper'>
      <Header headerArr={["Фильмы", <Button buttonText={"Войти"} onClick={()=> setActiveMod('login')} />]} />
      <div className={`authorization ${activeMod ? 'active' : ''}`}>
  
        {activeMod == 'login' && <Login onClick={() => setActiveMod('')} setRegistration={()=> setActiveMod('registration')}/>}

        {activeMod == 'registration' && <Registration onClick={() => setActiveMod('')} setLogin={()=> setActiveMod('login')} />}
      </div>
      <div className='main'>
        <Filter/>
      </div>
    </div>
  )
}

export default App
