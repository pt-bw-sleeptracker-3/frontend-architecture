import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from 'axios'

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SleepTracker from './components/SleepTracker';
import PrivateRoute from "./utils/PrivateRoute";
import MoodForm from './components/MoodForm'
import Registration from './components/RegistrationForm'
import EntryList from "./components/EntryList";
import Entry from "./components/Entry";
import UpdateEntry from './components/UpdateEntry'

function App() {
  const [entry, setEntry] = useState([]);


  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Registration} />
        <PrivateRoute path="/dashboard" componenet={Dashboard} />
        <PrivateRoute path="/tracker" component={SleepTracker} />
        <PrivateRoute exact path="/entries" component={EntryList} />
        <Route
          path="/entries/:id"
          render={props => {
            return <Entry {...props} />;
          }}
        />
        <Route path="/update-entry/:id"
          render={(props) => <UpdateEntry
            {...props}
            state={entry} />}
        />
      </Switch>
    </div>
  );
}

export default App;
