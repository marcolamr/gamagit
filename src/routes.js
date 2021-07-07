import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Repositories from './pages/Repositories';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/repositorios' component={Repositories} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;