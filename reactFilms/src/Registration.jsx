import { useState } from "react"
import { CompleteAuthorization } from "./CompleteAuthorization"

export function Registration({onClick, setLogin}) {
    const [credentials, setCredential] = useState({
        login: '',
        password: '',
        repeatPassword: ''
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

    function handleRepeatPasswordChange(e){
        setCredential({
            ...credentials,
            repeatPassword: e.target.value
        })
    }

    return (
        <div className='formSection'>
            <div className='formWindow'>
                <button className='button__close' onClick={() => onClick()}>x</button>
                <h2>Registration</h2>
                <form id='form' className='formClass' action='' onSubmit={(event) => {
                    CompleteAuthorization(event, "Registration")
                }}>
                    <input name='login' className='inputStyle' onChange={handleLoginChange} type='text' placeholder='Username'></input>
                    <input name='password' className='inputStyle' onChange={handlePasswordChange} type='text' placeholder='Password'></input>
                    <input name='repeatPassword' className='inputStyle' onChange={handleRepeatPasswordChange} type='text' placeholder='Repeat password'></input>
                    <button className='buttonStyle' type='submit'>REGISTRATION</button>
                </form>
                <p>уже есть аккаунт?</p>
                <button className='buttonStyle' onClick={() => setLogin()}>войти</button>
            </div>
        </div>
    )
}