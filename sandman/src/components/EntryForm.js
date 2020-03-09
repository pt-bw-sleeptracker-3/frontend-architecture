import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { AxiosWithAuth } from '../utils/AxiosWithAuth'
import axios from 'axios'

import { Pane, Button } from 'evergreen-ui'

const EntryForm = (props) => {

    const [state, setState] = useState({
        user_id: 11,
        date: '',
        sleepStart: 0,
        sleepEnd: 0,
        moodMorn: 2,
        moodMid: 2,
        moodNight: 2,

    })

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        AxiosWithAuth()
            .post(`api/sleep-data`, state)
            .then(response => {
                console.log('Response: ', response)
                console.log(response.data)
                setState({
                    user_id: 11,
                    date: '',
                    sleepStart: 0,
                    sleepEnd: 0,
                    moodMorn: 2,
                    moodMid: 2,
                    moodNight: 2,
                })
            })
            .catch(
                err => console.log("Error with Entry Form: ", err)
            )
    }


    return (
        <>
            <Pane
                display="flex"
                flexDirection="column"
            >
                <h4>Submit a Daily Entry!</h4>
                <form onSubmit={e => handleSubmit(e)}>
                    <label>Your User ID:</label><br />
                    <input
                        type="number"
                        name="user_id"
                        value={state.user_id}
                        onChange={e => handleChange(e)}
                    />
                    <br />
                    <label>Today's Date: </label> <br />
                    <input
                        type="date"
                        name="date"
                        value={state.date}
                        onChange={e => handleChange(e)}
                    />
                    <br />
                    <label>Sleep Start: </label><br />
                    <input
                        type="number"
                        name="sleepStart"
                        value={state.sleepStart}
                        placeholder="Sleep Start"
                        onChange={e => handleChange(e)}
                    />
                    <br />
                    <label>Sleep End:</label><br />
                    <input type="number"
                        name="sleepEnd"
                        value={state.sleepEnd}
                        placeholder="Sleep End"
                        onChange={e => handleChange(e)}
                    />
                    <br />
                    <label>Mood in the Morning:</label> <br />
                    <select name="moodMorn" onChange={e => handleChange(e)}>
                        <option value={1}>sad emoji</option>
                        <option value={2}>neutral emoji</option>
                        <option value={3}>happy emoji</option>
                        <option value={4}>very happy emoji</option>
                    </select>
                    <br />

                    <label>Mood in the Afternoon:</label> <br />
                    <select name="moodMid" onChange={e => handleChange(e)}>
                        <option value={1}>sad emoji</option>
                        <option value={2}>neutral emoji</option>
                        <option value={3}>happy emoji</option>
                        <option value={4}>very happy emoji</option>
                    </select>
                    <br />

                    <label>Mood at Night:</label> <br />
                    <select name="moodNight" onChange={e => handleChange(e)}>
                        <option value={1}>sad emoji</option>
                        <option value={2}>neutral emoji</option>
                        <option value={3}>happy emoji</option>
                        <option value={4}>very happy emoji</option>
                    </select>

                    <br />
                    <Button marginTop={16} iconBefore="upload" type="submit">Submit Entry!</Button>
                </form>
            </Pane>
        </>
    )
}

export default EntryForm