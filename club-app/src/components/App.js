import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import NotFound from '../pages/NotFound';
import Trip from '../pages/Trip';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/trip" component={Trip} />
          <Route component={NotFound} />
          {/* <Route exact path="/home" component={Home} /> */}
        </Switch>
    </BrowserRouter>
  );
}

export default App;