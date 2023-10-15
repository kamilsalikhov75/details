import { useState } from 'react'
import './App.css'
import { Button } from './Components/Button'
import { Login } from './Components/Login'
import { Registration } from './Components/Registration'
import { Header } from './Components/Header'
import { Filter } from './Components/Filter'
import { Modal } from './Components/Modal'

function App() {

  const [activeMod, setActiveMod] = useState(null);

  return (
    <div id='wrapper' className='wrapper'>
      <Header headerArr={["Фильмы", <Button onClick={() => setActiveMod('modalLogin')}>войти</Button>]} />

      {activeMod == 'modalLogin' && <Modal active={activeMod} setActive={setActiveMod}>
          <Login onClick={() => setActiveMod('')} setRegistration={()=> setActiveMod('modalRegistration')}/>
        </Modal>}
      
      {activeMod == 'modalRegistration' && <Modal active={activeMod} setActive={setActiveMod} >
        <Registration onClick={() => setActiveMod('')} setLogin={() => setActiveMod('modalLogin')} />
      </Modal>
      }

      <div className='main'>
        <Filter />
      </div>
    </div>
  )
}

export default App
