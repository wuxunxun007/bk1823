import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '@/pages/login';
import Register from '@/pages/register';

class App extends Component {
  render() {
    return (
      <div className = "container">
        <Switch>
          <Route path = "/userapp/login" component = { Login } />
          <Route path = "/userapp/register" component = { Register } />
        </Switch>
      </div>
    );
  }
}

export default App;
