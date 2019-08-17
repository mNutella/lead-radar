import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotFound } from '../../pages';
import routes from '../../routes';
import Navbar from './components/Navbar';


const App = () => (
  <Router>
    <Route
      render={({ location }) => (
        <React.Fragment>
          <Navbar location={location} />
          <Switch>
            {routes.map(route => (
              <Route
                key={`${route.path}}`}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
            <Route
              component={NotFound}
            />
          </Switch>
        </React.Fragment>
      )}
    />
  </Router>
);

export default hot(module)(App);
