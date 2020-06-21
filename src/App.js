import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import NAVN from './nav-new'
import HOME from './home'
import LOGIN from './login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NAVN/>
          <Route path='/' exact component={HOME} />
          <Route path='/login' exact component={LOGIN} />
        </Router>
      </div>
    );
  }
}

export default App;
