import { useState } from "react";
import { completeAuthorization } from "../utils/completeAuthorisation";
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
        <div className='form__section'>
            <div className='form__window'>
                <button className='button__close' onClick={() => onClick()}>x</button>
                <h2 className="form__title">Login</h2>
                <form className='form__class' action='' onSubmit={(event) => {
                    completeAuthorization(event, "Login")
                }}>
                    <input value={credentials.login} onChange={handleLoginChange} name='login' className='inputStyle' placeholder='Username'></input>
                    <input value={credentials.password} onChange={handlePasswordChange} name='password' className='inputStyle' placeholder='Password'></input>
                    <button className='buttonStyle' type='submit'>LOGIN</button>
                </form>
                <p>нет аккаунта?</p>
                <Button onClick={()=> setRegistration()}>создать аккаунт</Button>
            </div>
        </div>
    )
}