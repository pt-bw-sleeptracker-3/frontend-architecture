import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Erik's imports
import Login from './components/Login'
import MoodForm from './components/MoodForm'

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
