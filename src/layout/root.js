import '../App.css';

import React, { Component } from 'react';

import Header from './header';
import Sidebar from './sidebar';
import logo from '../logo.svg';

class Root extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <img src={logo} className="App-logo" alt="logo" />
        <div>
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default Root;
