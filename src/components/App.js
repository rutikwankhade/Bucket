import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Signup from "./Signup"
import Login from './Login'
import Dashboard from './Dashboard'
import Home from './Home'
import Ideas from '../pages/ideas'

import PrivateRoute from './PrivateRoute'
import Navbar from './Navbar'


const App = () => {
  return (
    <div className="bg-yellow-50 py-6">
      <Router>
        <AuthProvider>
          <Navbar />

          <Switch>
            <Route exact path="/"
              component={Home} />
            <Route exact path="/explore-ideas"
              component={Ideas} />

            <Route path="/signup"
              component={Signup} />
            <Route path="/login"
              component={Login} />
            <PrivateRoute path="/dashboard"
              component={Dashboard} />
          </Switch>

        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
