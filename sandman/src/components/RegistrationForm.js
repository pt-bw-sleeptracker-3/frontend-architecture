import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Name must be at least 2 characters.')
        .required('This is a required field.'),
    email : yup
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

const Register = () => {

    const { register, errors, handleSubmit, getValues } = useForm({

        validationSchema: schema
    })



    //submitHandler is passed to react-hook-form 's handleSubmit function
    //still not sure what to include here for the api so its commented for now -erik
    const onSubmit = (data) => {
        const values = getValues()
        console.log(values)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type='text'
                    name='name'
                    placeholder='Name'
                    ref={register}
                /> 
                {errors.name && <p>{errors.name.message}</p>}

                <input 
                    type='text' 
                    name='email' 
                    placeholder='Email' 
                    ref={register}
                />
                {errors.email && <p>{errors.email.message}</p>}   

                <input 
                    type='text' 
                    name='username'  
                    placeholder='Username' 
                    ref={register}
                />
                {errors.username && <p>{errors.username.message}</p>}

                 <input 
                    type='password' 
                    name='password' 
                    placeholder='Password' 
                    ref={register}
                />
                {errors.password && <p>{errors.password.message}</p>}

                <button type='submit'>
                    Sign Up
                </button>
            </form>

        </>
    )
}

export default Register