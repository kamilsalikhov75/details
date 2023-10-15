import { useState } from "react"
import { completeAuthorization } from "../utils/completeAuthorisation";
import { Button } from "./Button";

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
        <div className='form__section' onClick={e => e.stopPropagation()}> 
            <div className='form__window'>
                <button className='button__close' onClick={() => onClick()}>x</button>
                <h2 className="form__title">Registration</h2>
                <form id='form' className='form__class' action='' onSubmit={(event) => {
                    completeAuthorization(event, "Registration")
                }}>
                    <input name='login' className='inputStyle' onChange={handleLoginChange} type='text' placeholder='Username'></input>
                    <input name='password' className='inputStyle' onChange={handlePasswordChange} type='text' placeholder='Password'></input>
                    <input name='repeatPassword' className='inputStyle' onChange={handleRepeatPasswordChange} type='text' placeholder='Repeat password'></input>
                    <button className='buttonStyle' type='submit'>REGISTRATION</button>
                </form>
                <p>уже есть аккаунт?</p>
                <Button onClick={()=> setLogin()}>войти</Button>
            </div>
        </div>
    )
}