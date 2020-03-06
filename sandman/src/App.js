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



  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Registration} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/tracker" component={SleepTracker} />
      </Switch>
    </div>
  );
}

export default App;
