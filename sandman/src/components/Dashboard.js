import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { AxiosWithAuth } from '../utils/AxiosWithAuth';
import { Link } from 'react-router-dom';

import { Pane, Button, Text, Heading, TextInput } from 'evergreen-ui';

import DashboardNav from "./DashboardNav";
import EntryForm from "./EntryForm"

import "../App.scss";

const Dashboard = (props) => {

  //ERIKs THIRD PARTY API CALL
  const [location, setLocation] = useState({
    lat: '',
    lon: ''
  })
  const [sunData, setSunData] = useState({})


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      })
    })
  }, [])
  console.log(`location`, location)

  useEffect(() => {
    axios.get(`https://api.sunrise-sunset.org/json?lat=${location.lat}&lng=${location.lon}`)
      .then(response => {
        setSunData(response.data.results)

      })
      .catch(err => console.log('sunset-rise-data', err))
  }, [location])
  //ERIKS API CALL END

  return (
    <>
      <Pane
        display="flex">
        <DashboardNav />
        <Pane
          display="flex"
          flexDirection="column">
          <h1>Dashboard</h1><br />
          <p>Sunrise today is at {sunData.sunrise} UTC Time</p>
          <p>Sunset today is at {sunData.sunset} UTC Time</p>
          <EntryForm />
        </Pane>
      </Pane>
    </>
  )
}

export default Dashboard;