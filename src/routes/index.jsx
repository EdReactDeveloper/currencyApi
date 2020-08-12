import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../containers/Home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Home exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;