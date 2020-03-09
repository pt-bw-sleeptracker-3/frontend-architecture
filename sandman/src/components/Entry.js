import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { AxiosWithAuth } from '../utils/AxiosWithAuth'
import EntryCard from "./EntryCard"

export default class Entry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            entry: null
        }
    }

    componentDidMount() {
        this.fetchEntry(this.props.match.params.id)
    }

    componentWillReceiveProps(newProps) {
        if (this.props.match.params.id !== newProps.match.params.id) {
            this.fetchEntry(newProps.match.params.id)
        }
    }

    fetchEntry = id => {
        AxiosWithAuth()
            .get(`api/sleep-data/${id}`)
            .then(res => this.setState({ entry: res.data }))
            .catch(err => console.log(err.response))
    }

    deleteEntry = id => {
        AxiosWithAuth()
            .delete(`api/sleep-data/${id}`)
            .then(() => {
                this.props.history.push("/entries")
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        if (!this.state.entry) {
            return <div>Loading entry information...</div>
        }

        return (
            <div className="save-wrapper">
                <EntryCard entry={this.state.entry} />
                <Link
                    className="edit-button"
                    to={`/update-entry/${this.props.match.params.id}`}
                >
                    Edit
        </Link>
                <button
                    className="delete-button"
                    onClick={() => this.deleteEntry(this.props.match.params.id)}
                >
                    Delete
        </button>
            </div>
        )
    }
}