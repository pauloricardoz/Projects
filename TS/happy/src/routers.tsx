import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Landing from './pages/landing';
import OrphanagesMap from './pages/orphanagesMap';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch >
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  )
}