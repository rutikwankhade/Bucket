import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from "./Signup"
import Login from './Login'
import Dashboard from './Dashboard'
import Home from './Home'
import PrivateRoute from './PrivateRoute'


const App = () => {
  return (
    <div>
      <Router basename="/">
        <AuthProvider>
          <Switch>
          <Route exact path="/" component={Home} />

            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>

        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
