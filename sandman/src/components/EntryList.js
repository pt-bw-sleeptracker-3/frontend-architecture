import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EntryCard from "./EntryCard"
import Entry from './Entry'
import { AxiosWithAuth } from "../utils/AxiosWithAuth";

import { Pane } from 'evergreen-ui'

import DashboardNav from './DashboardNav'

import ".././App.scss"

export default class EntryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: []
        };
    }

    componentDidMount() {
        AxiosWithAuth()
            .get("api/sleep-data")
            // .then(res => this.setState({ entries: res.data }))
            // .then(res => console.log(res.data))
            .then(res => this.setState({ entries: res.data }))
            .catch(err => console.log(err.response));
    }

    render() {
        return (
            <div>
                <Pane
                    display="flex">
                    <DashboardNav />
                    <Pane
                        marginLeft={25}>
                        <div className="entry-list">
                            {this.state.entries.map(entry => (
                                <EntryDetails key={entry.id} entry={entry} />
                            ))}
                        </div>
                    </Pane>
                </Pane>
            </div>
        );
    }
}

function EntryDetails({ entry }) {
    return (
        <Link to={`/entries/${entry.id}`}>
            <EntryCard entry={entry} />
        </Link>
    );
}
