import React, { useState } from react

const Register = () => {

    const [registration, setRegistration] = useState({
        name: '',
        email: '',
        username: '',
        password: ''
    })

    const changeHandler = (event) => {
        setRegistration({ ...registration, [event.target.name]: event.target.value })
    }


    //still not sure what to include here for the api so its commented for now -erik
    /*const submitHandler = () => {
       
    }*/

    return (
        <div>
            <form onSubmit={}>
                <input 
                    type='text'
                    name='name'
                    value={registration.name}
                    placeholder='Name'
                    onChange={changeHandler}
                />
                <input 
                    type='text' 
                    name='email' 
                    value={registration.email} 
                    placeholder='Email' 
                    onChange={changeHandler}
                />
                <input 
                    type='text' 
                    name='username' 
                    value={registration.username} 
                    placeholder='Username' 
                    onChange={changeHandler}
                />
                 <input 
                    type='password' 
                    name='password' 
                    alue={registration.password} 
                    placeholder='Password' 
                    onChange={changeHandler}
                />
            </form>

        </div>
    )
}

export default Register