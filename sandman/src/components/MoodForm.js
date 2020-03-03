import React, { useState } from react

const MoodForm = () => {

    const [mood, setMood] = useState([])

    const changeHandler = (event) => {
        setMood(Number(event.target.value))
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <select>
                    <option value='1'>sad emoji</option>
                    <option value='2'>neutral emoji</option>
                    <option value='3'>happy emoji</option>
                    <option value='4'>very happy emoji</option>
                </select>
            </form>
        </>
    )
}

export default MoodForm