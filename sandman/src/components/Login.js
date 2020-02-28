import React, { useState } from 'react';

const Login = () => {

    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const changeHandler = (event) => {
        setLogin({...login, [event.target.name]: event.target.value})
    }

    const submitHandler = () => {
        //idk what goes here yet
    }

    return (
        <>
            <h1>Welcome to Sandman.</h1>
            <h3>Please Log In.</h3>
            <form onSubmit={submitHandler}>
                <label>
                    Username: 
                    <input 
                        type='text'
                        name='username'
                        value={login.username}
                        placeholder='username'
                        onChange={changeHandler}
                    />
                </label>
                <br/>
                <label>
                    Password: 
                    <input 
                        type='password'
                        name='password'
                        value={login.password}
                        placeholder='password'
                        onChange={changeHandler}
                    />
                </label>
                <br/>
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login