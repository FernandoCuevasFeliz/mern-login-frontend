import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '@layout/Navbar/Navbar';
import Home from 'views/Home/Home';
import Login from 'views/Login/Login';
import Register from 'views/Register/Register';

const IndexRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default IndexRouter;
