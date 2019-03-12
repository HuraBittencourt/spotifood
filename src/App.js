import './App.css';

import React, { Component } from 'react';
import { Route, Router } from 'react-router';

import Home from './layout/home';
import Root from './layout/root';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path={"/"} component={Root}>
          <Route path={"/"} component={Home}/>
          <Route path={'home'} component={Home} />
        </Route>
      </Router>
    );
  }
}

export default App;
