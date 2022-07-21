import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Resources from '../components/Resources';
import Pricing from '../components/Pricing';
import Home from '../components/Home';

const routes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/resources" component={Resources} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/overview" component={null} />
      <Route path="/features" component={null} />
      <Route path="/careers" component={null} />
      <Route path="/help" component={null} />
      <Route path="/privacy" component={null} />
    </Switch>
  );
};

export default routes;
