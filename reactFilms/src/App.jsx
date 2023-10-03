import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [activeMod, setActiveMod] = useState(null);



  return (
    <div className={`wrapper ${activeMod ? 'active' : ''}`}>
      <Button
        buttonText={"Login"}
        onClick={() => setActiveMod('login')}
      />

      {activeMod == 'login' && <Login />}


      <Button
        buttonText={"Registration"}
        onClick={() => setActiveMod('registration')}
      />
      {activeMod == 'registration' && <Registration />}

    </div>
  )

}

function Button({ buttonText, onClick }) {

  return (
    <>
      <button className='buttonStyle' onClick={() => onClick()}>{buttonText}</button>
    </>
  )
}



function Login() {

  const [credentials, setCredential] = useState({
    login: '',
    password: ''
  });

  function handleLoginChange(e) {
    setCredential({
      ...credentials,
      login: e.target.value
    })
  }

  function handlePasswordChange(e) {
    setCredential({
      ...credentials,
      password: e.target.value
    })
  }



  return (
    <div className='formSection'>
      <div className='formWindow'>
        <button className='button__close'>x</button>
        <h2>Login</h2>
        <form className='formClass' action='' onSubmit={(event) => {
          CompleteAuthorization(event, "Login")
        }}>
          <input value={credentials.login} onChange={handleLoginChange} name='login' className='inputStyle' placeholder='Username'></input>
          <input value={credentials.password} onChange={handlePasswordChange} name='password' className='inputStyle' placeholder='Password'></input>
          <button className='buttonStyle' type='submit'>LOGIN</button>
        </form>
        
      </div>
    </div>
  )
}

function Registration() {
  return (
    <div className='formSection'>
      <div className='formWindow'>
        <h2>Registration</h2>
        <form id='form' className='formClass' action='' onSubmit={(event) => {
          CompleteAuthorization(event, "Registration")
        }}>
          <input name='login' className='inputStyle' type='text' placeholder='Username'></input>
          <input name='password' className='inputStyle' type='text' placeholder='Password'></input>
          <input name='repeatPassword' className='inputStyle' type='text' placeholder='Repeat password'></input>
          <button className='buttonStyle' type='submit'>REGISTRATION</button>
        </form>
      </div>
    </div>
  )
}

const CompleteAuthorization = (event, formType) => {
  event.preventDefault();
  if (formType == 'Login') {
    console.log("Пользователь успешно авторизован")
  }
  if (formType == 'Registration') {
    console.log("Пользователь успешно зарегистрирован")
  }
  console.log("Логин: " + event.target.elements.login.value);
  console.log("Пароль: " + event.target.elements.password.value);
}



export default App
