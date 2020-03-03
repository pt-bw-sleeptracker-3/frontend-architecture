import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import { Link } from 'react-router-dom';

import { Pane, Button, Text, Heading, TextInput } from 'evergreen-ui';

import DashboardNav from "./DashboardNav";

import "../App.scss";

const Dashboard = (props) => {
    console.log("Props from Dashboard: ", props);

    return (
        <>
            <Pane
                display="flex">
                <DashboardNav />
                <h1>Dashboard</h1>
            </Pane>
        </>
    )
}

export default Dashboard;