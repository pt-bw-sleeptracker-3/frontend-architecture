import React, { useState } from 'react';

import { AxiosWithAuth } from "../utils/AxiosWithAuth";

import "../App.scss"

import Navigation from "./Navigation"

// Styling from Evergreen
import { Pane, Button, Text, Heading, TextInput } from 'evergreen-ui';

// Images
import Logo from "../images/text-logo.png";

const Login = props => {

    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const changeHandler = (event) => {
        setLogin({ ...login, [event.target.name]: event.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        AxiosWithAuth()
            .post("api/login", login)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                props.history.push("/dashboard");
            })

            .catch(err => console.log("Error with Login: ", err.response))
    }

    return (
        <>
            <Pane
                display="flex">
                <Navigation />
                <Pane
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    marginLeft="30%"
                    marginTop="-10%"
                >
                    <Heading size={800}>Welcome to Sandman!</Heading>
                    <Heading size={600} marginBottom={24}>Please Log In!</Heading>
                    <form onSubmit={submitHandler}>
                        <label>
                            <TextInput
                                marginBottom={16}
                                type='text'
                                name='username'
                                value={login.username}
                                placeholder='Username...'
                                onChange={changeHandler}
                            />
                        </label>
                        <br />
                        <label>
                            <TextInput
                                marginBottom={16}
                                type='password'
                                name='password'
                                value={login.password}
                                placeholder='Password...'
                                onChange={changeHandler}
                            />
                        </label>
                        <br />
                        <Button
                            type='submit'
                            appearance="primary"
                            intent="none"
                            iconBefore="log-in"
                        >Login</Button>
                    </form>
                    {/* <Button
                    appearance="primary"
                    intent="success"
                    iconAfter="moon"
                    display="block"
                    position="absolute"
                    right="42.7%"
                    top="25.8%"
                >Register</Button> */}

                </Pane>
            </Pane>
        </>
    )
}

export default Login
