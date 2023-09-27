import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <Wrapper/>
    </div>

    
  );
}

function Wrapper() {

  const [activeMod, setActiveMod] = useState(null);

  return (
    <div className={`wrapper ${activeMod ? 'active' : ''}`}>
      <Button
        buttonText={"Login"}
        onClick={()=>setActiveMod('login')}
      />
      
      {activeMod == 'login' && <Login/>}

      
      <Button
        buttonText={"Registration"}
        onClick={()=>setActiveMod('registration')}
      />
      {activeMod == 'registration' && <Registration/>}
    
    </div>
  )

}

function Button({ buttonText, onClick}) {

  return (
    <>
      <button className='buttonStyle' onClick={() => onClick()}>{buttonText}</button> 
    </>
  ) 
}



function Login(){
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function handleLoginChange(e){
    setLogin(e.target.value)
  }

  function handlePasswordChange(e){
    setPassword(e.target.value)
  }

  return(
    <div className='formSection'>
      <div className='formWindow'>
        <h2>Login</h2>
        <form className='formClass' action='' onSubmit={(event) =>{
          CompleteAuthorization(event, "Login")
        }}>
          <input value={login} onChange={handleLoginChange} name='login' className='inputStyle' placeholder='Username'></input>
          <input value={password} onChange={handlePasswordChange} name='password' className='inputStyle' placeholder='Password'></input>
          <button className='buttonStyle' type='submit'>LOGIN</button>
        </form>
      </div>
    </div>
  )
}

function Registration(){
  return(
    <div className='formSection'>
      <div className='formWindow'>
        <h2>Registration</h2>
        <form id ='form' className='formClass' action='' onSubmit={(event) =>{
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

const CompleteAuthorization = (event, formType) =>{
  event.preventDefault();
  if (formType == 'Login'){
    console.log("Пользователь успешно авторизован")
  }
  if (formType == 'Registration'){
    console.log("Пользователь успешно зарегистрирован")
  }
  console.log("Логин: " + event.target.elements.login.value);
  console.log("Пароль: " + event.target.elements.password.value);
}

export default App;
