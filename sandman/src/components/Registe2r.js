import React, { useState, useEFfect } from "react";
import { AxiosWithAuth } from "../utils/AxiosWithAuth";
import axios from 'axios'

import "../App.scss"

import Navigation from "./Navigation"

// Styling from Evergreen
import { Pane, Button, Heading, TextInput } from 'evergreen-ui';

const Register = props => {
    const [register, setRegister] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
    })

    const handleChange = e => {
        setRegister({ ...register, [e.target.name]: e.target.value })
    }

    const handleRegister = e => {
        e.preventDefault();
        AxiosWithAuth()
            .post(`api/auth/register`, register)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                // props.history.push('/');
                console.log(res.data)
            })
            .catch(err => {
                console.log("There was an error with registering: ", err.message)
            })

        setRegister({
            name: '',
            email: '',
            username: '',
            password: '',
        })
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
                    <Heading size={600} marginBottom={24}>Please Register!</Heading>
                    <Pane
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column">
                        <form onSubmit={handleRegister}>
                            <label>
                                <TextInput
                                    marginBottom={16}
                                    type='text'
                                    name='username'
                                    value={register.username}
                                    placeholder='Username...'
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                            <label>
                                <TextInput
                                    marginBottom={16}
                                    type='password'
                                    name='password'
                                    value={register.password}
                                    placeholder='Password...'
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                            <label>
                                <TextInput
                                    marginBottom={16}
                                    type='name'
                                    name='name'
                                    value={register.name}
                                    placeholder='Name...'
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                            <label>
                                <TextInput
                                    marginBottom={16}
                                    type='email'
                                    name='email'
                                    value={register.email}
                                    placeholder='E-Mail Address...'
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                            <Button
                                type='submit'
                                appearance="primary"
                                intent="none"
                                iconBefore="moon"
                                onSubmit={handleRegister}
                            >Register</Button>
                        </form>
                        <Pane
                            display="flex"
                            justifyContent="flex-end"
                        >
                            <Button
                                appearance="primary"
                                intent="success"
                                iconAfter="log-in"
                            >Login</Button>
                        </Pane>
                    </Pane>
                </Pane>
            </Pane>
        </>
    )


}

export default Register;