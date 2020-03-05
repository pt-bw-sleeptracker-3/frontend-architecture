import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SleepTracker from './components/SleepTracker';
import PrivateRoute from "./utils/PrivateRoute";
import MoodForm from './components/MoodForm'
import Registration from './components/RegistrationForm'

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
