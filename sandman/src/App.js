import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SleepTracker from './components/SleepTracker';
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route path="/register" component={Register} /> */}
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/tracker" component={SleepTracker} />
      </Switch>
    </div>
  );
}

export default App;
