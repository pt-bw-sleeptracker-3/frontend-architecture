import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Erik's imports
import Login from './components/Login'
import MoodForm from './components/MoodForm'
import Registration from './components/RegistrationForm'

function App() {
  return (
    <div className="App">
      <Login/>
      <Registration/>
    </div>
  );
}

export default App;
