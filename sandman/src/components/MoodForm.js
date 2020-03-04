import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import Axios from "axios"

const schema = yup.object().shape({
    mood: yup
        .number().typeError('Please select an emoji.'),
})



const MoodForm = () => {

    const { register, errors, handleSubmit } = useForm({
        validationSchema: schema
    })

    const [mood, setMood] = useState({
        mood: 'default'
    })

    const changeHandler = (event) => {
        setMood(event.target.value)
    }

    const submitHandler = () => {
       console.log(mood)
    }

    return(
        <>
            <h4>Which most accurately represents your current mood?</h4>
            <form onSubmit={handleSubmit(submitHandler)}>
                <select name='mood' onChange={changeHandler} ref={register}>
                    <option value='error'>Pick mood</option>
                    <option value={1}>sad emoji</option>
                    <option value={2}>neutral emoji</option>
                    <option value={3}>happy emoji</option>
                    <option value={4}>very happy emoji</option>
                </select>
                {errors.mood && <p>{errors.mood.message}</p>}

                <button type='submit'>
                    Submit
                </button>
            </form>
        </>
    )
}

export default MoodForm