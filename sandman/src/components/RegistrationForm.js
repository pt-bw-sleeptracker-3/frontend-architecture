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

    const { register, errors, handleSubmit } = useForm({
        validationSchema: schema
    })

    const [registration, setRegistration] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
    })

    const changeHandler = (event) => {
        setRegistration({ ...registration, [event.target.name]: event.target.value })

    }

    //submitHandler is passed to react-hook-form 's handleSubmit function
    //still not sure what to include here for the api so its commented for now -erik
    const submitHandler = (e) => {
        e.preventDefault()
       console.log(registration)
    }

    return (
        <>
            <form onSubmit={handleSubmit(submitHandler)}>
                <input 
                    type='text'
                    name='name'
                    value={registration.name}
                    placeholder='Name'
                    onChange={changeHandler}
                    ref={register}
                /> 
                {errors.name && <p>{errors.name.message}</p>}

                <input 
                    type='text' 
                    name='email' 
                    value={registration.email} 
                    placeholder='Email' 
                    onChange={changeHandler}
                    ref={register}
                />
                {errors.email && <p>{errors.email.message}</p>}   

                <input 
                    type='text' 
                    name='username' 
                    value={registration.username} 
                    placeholder='Username' 
                    onChange={changeHandler}
                    ref={register}
                />
                {errors.username && <p>{errors.username.message}</p>}

                 <input 
                    type='password' 
                    name='password' 
                    value={registration.password} 
                    placeholder='Password' 
                    onChange={changeHandler}
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