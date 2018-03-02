import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from '../components/Login/Login.js';

export default (
   <Switch>
      <Route exact path="/" component={Login} />
   </Switch>
)