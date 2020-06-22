import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import NAVN from './nav-new'
import HOME from './home'
import LOGIN from './login'
import QUES from './question'
import STG1 from './stage1'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <NAVN/>
            <Route path=''  component={HOME} />
            <Route path='/login' exact component={LOGIN} />
            <Route path='/start' exact component={QUES} />
            <Route path='/stage1' exact component={STG1} />
          </Switch>         
        </Router>
      </div>
    );
  }
}

export default App;
