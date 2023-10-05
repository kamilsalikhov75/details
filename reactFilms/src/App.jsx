import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './Button'
import { Login } from './Login'
import { Registration } from './Registration'
import { CompleteAuthorization } from './CompleteAuthorization'


function App() {

  const [activeMod, setActiveMod] = useState(null);

  return (
    <div id='wrapper' className='wrapper'>
      <div className={`authorization ${activeMod ? 'active' : ''}`}>
        <Button
          buttonText={"Login"}
          onClick={() => setActiveMod('login')}
        />
        {activeMod == 'login' && <Login onClick={() => setActiveMod('')} />}

        <Button
          buttonText={"Registration"}
          onClick={() => setActiveMod('registration')}
        />
        {activeMod == 'registration' && <Registration onClick={() => setActiveMod('')} />}
      </div>


    </div>
  )
}

export default App
