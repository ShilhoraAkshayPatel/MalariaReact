import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './Navbar/navbar'
import Home from './Components/HomeComp/Home'
import Demo from './Components/DemoComp/Demo'


class App extends Component {
  render() {

    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/demo" component={Demo} />

        </div>
      </Router>

    );
  }

}

export default App;
