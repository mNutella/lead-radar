import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import routes from '../../routes';
import { getRandomID } from '../../utils';


const App = () => (
  <Router>
    <div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post_job">Post</Link>
        </li>
        <li>
          <Link to="/press">Press</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      {routes.map(route => (
        <Route
          key={`${route.path}-${getRandomID()}`}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </div>
  </Router>
);

export default hot(module)(App);
