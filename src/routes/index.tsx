import React from 'react';
import { Switch } from 'react-router-dom';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Room from '../pages/Room';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/enter-room" component={SignIn} />
    <Route path="/create-room" component={SignUp} />

    <Route isPrivate path="/room/:id" component={Room} />
  </Switch>
);

export default Routes;
