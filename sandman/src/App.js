import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from 'axios'

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SleepTracker from './components/SleepTracker';
import PrivateRoute from "./utils/PrivateRoute";
import MoodForm from './components/MoodForm'
import Registration from './components/RegistrationForm'

function App() {

  //ERIKs THIRD PARTY API CALL
  const [location, setLocation] = useState({
    lat: '',
    lon: ''
  })
  const [sunData, setSunData] = useState({})


  useEffect(()=>{
    navigator.geolocation.getCurrentPosition( position => {
      setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        })
    })    
  }, [])
  console.log(`location`, location)

  useEffect(()=>{
    axios.get(`https://api.sunrise-sunset.org/json?lat=${location.lat}&lng=${location.lon}`)
    .then(response=>{
      setSunData(response.data.results)

    })
    .catch(err=>console.log('sunset-rise-data', err))
  }, [location])
  //ERIKS API CALL END

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Registration} />
        <PrivateRoute path="/dashboard" render={props=> <Dashboard {...props} sunrise={sunData.sunrise} sunset={sunData.sunset}/>} />
        <PrivateRoute path="/tracker" component={SleepTracker} />
      </Switch>
    </div>
  );
}

export default App;
