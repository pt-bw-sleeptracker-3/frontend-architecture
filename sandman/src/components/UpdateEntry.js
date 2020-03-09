import React, { useState, useEffect } from "react"
import axios from "axios"
import { AxiosWithAuth } from '../utils/AxiosWithAuth'

const UpdateEntry = props => {
    const [entry, setEntry] = useState({
        id: 0,
        date: '',
        sleepStart: 0,
        sleepEnd: 0,
        moodMorn: 2,
        moodMid: 2,
        moodNight: 2,
    })
    const { id } = props.match.params
    useEffect(() => {
        AxiosWithAuth()
            .get(`api/sleep-data/${id}`)
            .then(res => {
                setEntry({ ...entry, ...res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // Handlers

    const changeHandler = event => {
        setEntry({
            ...entry,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = event => {
        event.preventDefault()
        AxiosWithAuth()
            .put(`api/sleep-data/${id}`, entry)
            .then(res => {
                console.log(res)
                if (id) {
                    props.history.push(`/entries/${id}`)
                }
            })
            .catch(err => {
                console.log(err)
                console.log(entry)
            })
    }

    return (
        <div className="save-wrapper">
            <div className="update-entry">
                <h1>Edit Entry</h1>
                <form onSubmit={submitHandler} className="update-form">
                    <label>Sleep Start: </label><br />
                    <input
                        type="number"
                        name="sleepStart"
                        value={entry.sleepStart}
                        placeholder="Sleep Start"
                        onChange={changeHandler}
                    />
                    <br />
                    <label>Sleep End:</label><br />
                    <input type="number"
                        name="sleepEnd"
                        value={entry.sleepEnd}
                        placeholder="Sleep End"
                        onChange={changeHandler}
                    />
                    <br />
                    <label>Mood in the Morning:</label> <br />
                    <select name="moodMorn" onChange={changeHandler}>
                        <option value={1}>sad emoji</option>
                        <option value={2}>neutral emoji</option>
                        <option value={3}>happy emoji</option>
                        <option value={4}>very happy emoji</option>
                    </select>
                    <br />

                    <label>Mood in the Afternoon:</label> <br />
                    <select name="moodMid" onChange={changeHandler}>
                        <option value={1}>sad emoji</option>
                        <option value={2}>neutral emoji</option>
                        <option value={3}>happy emoji</option>
                        <option value={4}>very happy emoji</option>
                    </select>
                    <br />

                    <label>Mood at Night:</label> <br />
                    <select name="moodNight" onChange={changeHandler}>
                        <option value={1}>sad emoji</option>
                        <option value={2}>neutral emoji</option>
                        <option value={3}>happy emoji</option>
                        <option value={4}>very happy emoji</option>
                    </select>

                    <br />
                    <button className="edit-button" type="submit">
                        Edit
          </button>
                </form>
            </div>
        </div>
    )
}

export default UpdateEntry;