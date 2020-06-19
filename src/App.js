import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import NAV from './nav'
import HOME from './home'
import LOGIN from './login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NAV />
          <Route path='/' exact component={HOME} />
          <Route path='/login' exact component={LOGIN} />
        </Router>
      </div>
    );
  }
}

export default App;
