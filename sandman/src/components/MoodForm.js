import React, { useState } from 'react'
import Axios from "axios"

const MoodForm = () => {

    const [mood, setMood] = useState([])

    const changeHandler = (event) => {
        setMood(Number(event.target.value))
    }

    const submitHandler = () => {
        console.log(mood)
    }

    return(
        <>
            <h4>Which most accurately represents your current mood?</h4>
            <form onSubmit={submitHandler}>
                <select onChange={changeHandler}>
                    <option value='0'>Pick mood</option>
                    <option value='1'>sad emoji</option>
                    <option value='2'>neutral emoji</option>
                    <option value='3'>happy emoji</option>
                    <option value='4'>very happy emoji</option>
                </select>
                <button type='submit'>
                    Submit
                </button>
            </form>
        </>
    )
}

export default MoodForm