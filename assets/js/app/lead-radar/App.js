import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from '../../routes';
import { getRandomID } from '../../utils';
import Navbar from './components/Navbar';


const App = () => (
  <Router>
    <Navbar />
    {routes.map(route => (
      <Route
        key={`${route.path}-${getRandomID()}`}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ))}
  </Router>
);

export default hot(module)(App);
