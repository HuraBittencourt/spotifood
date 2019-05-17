import './App.css';

import React, { Component } from 'react';
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import { authenticate, isAuthenticated } from './authentication';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Home from './layout/home';
import Login from './login';
import Main from './layout/main';
import Root from './layout/root';

const authenticated = authenticate();  
class App extends Component {


  render() {
    // console.log(authenticated)
    return (
      <Router>
        <Route exact path="/" render={() => (
            authenticated ? 
            <Redirect to='/home'/> :
            <Redirect to='/login'/> 
          )} 
        />

        {isAuthenticated && (
          <Route exact path='/home' component={Main}/>
        )}
        {isAuthenticated && (
          <Route exact path='/login' component={Login}/>
        )}
      </Router>
    );
  }
}

export default App;
