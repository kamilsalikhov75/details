import { useState } from "react";
import { CompleteAuthorization } from "./CompleteAuthorization";
import { Button } from "./Button";

export function Login({onClick, setRegistration}) {

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
                <button className='button__close' onClick={() => onClick()}>x</button>
                <h2>Login</h2>
                <form className='formClass' action='' onSubmit={(event) => {
                    CompleteAuthorization(event, "Login")
                }}>
                    <input value={credentials.login} onChange={handleLoginChange} name='login' className='inputStyle' placeholder='Username'></input>
                    <input value={credentials.password} onChange={handlePasswordChange} name='password' className='inputStyle' placeholder='Password'></input>
                    <button className='buttonStyle' type='submit'>LOGIN</button>
                </form>
                <p>нет аккаунта?</p>
                <button className='buttonStyle' onClick={() => setRegistration()}>создать аккаунт</button>
            </div>
        </div>
    )
}