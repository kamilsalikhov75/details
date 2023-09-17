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
    </div>
  );
}

function Wrapper() {

  return (
    <div className='wrapper'>
      <BTN
        buttonType={"Login"}
      />
      <BTN
        buttonType={"Registration"}
      />
    </div>
  )

}

function BTN({ buttonType }) {
  const [activeMod, setActiveMod] = useState(false);

  const buttonEvent = (e) =>{
    setActiveMod(true);
    const wrapper = e.target.closest('div')
    wrapper.style.backgroundColor = 'grey';
  }

  return (
    <>
      <button className='buttonStyle' onClick={buttonEvent}>{buttonType}</button>
      {activeMod && <Form formType={buttonType}/>}
    </>
  )
}

function Form({formType}){
  return (
    <div className='formSection'>
      <div className='formWindow'>
        <h2>{formType}</h2>
        <form className='formClass' onSubmit={alert("FORM SUBMIT")} action=''>
          <input className='inputStyle' placeholder='Username'></input>
          <input className='inputStyle' placeholder='Password'></input>
          <button className='buttonStyle' onClick={alert("BUTTON CLICK")}>{formType}</button>
        </form>
      </div>
    </div>
  )
}


export default Wrapper;
