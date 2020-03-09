import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { AxiosWithAuth } from "../utils/AxiosWithAuth"

import { Pane, Heading, Button } from 'evergreen-ui'

import Navigation from '../components/Navigation'

const schema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Name must be at least 2 characters.')
        .required('This is a required field.'),
    email: yup
        .string()
        .email("Invalid email.")
        .required('This is a required field.'),
    username: yup
        .string()
        .min(8, 'Username must be at least 8 characters.')
        .max(16, 'Username must be no more than 16 characters.')
        .required('This is a required field.'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters.')
        .required('This is a required field.')
})

const Register = (props) => {

    const { register, errors, handleSubmit, getValues } = useForm({
        validationSchema: schema
    })



    //submitHandler is passed to react-hook-form 's handleSubmit function
    //still not sure what to include here for the api so its commented for now -erik
    const onSubmit = () => {
        const values = getValues()
        console.log(values)
        AxiosWithAuth()
            .post("api/auth/register", getValues)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                props.history.push("/dashboard");
            })

            .catch(err => console.log("Error with Register: ", err.response))
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            ref={register}
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                        <br />
                        <input
                            type='text'
                            name='email'
                            placeholder='Email'
                            ref={register}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                        <br />
                        <input
                            type='text'
                            name='username'
                            placeholder='Username'
                            ref={register}
                        />
                        {errors.username && <p>{errors.username.message}</p>}
                        <br />
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            ref={register}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                        <br />
                        <Button type='submit'
                            appearance="primary"
                            intent="none"
                            iconBefore="moon">
                            Sign Up
                </Button>
                    </form>
                </Pane>
            </Pane>
        </>
    )
}

export default Register