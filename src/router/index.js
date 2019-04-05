import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '@/layout/App';
import UserApp from '@/layout/UserApp';
import DetailApp from '@/layout/DetailApp';

const RouterCom = () => (
  <Router>
    <Switch>
      <Route path = "/detailapp" component = { DetailApp } />
      <Route path = "/userapp" component = { UserApp } />
      <Route path = "/" component = { App } />
    </Switch>
  </Router>
);

export default RouterCom;
