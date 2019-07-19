import React from 'react';
import { hot } from 'react-hot-loader';
import ColorChanger from './components/ColorChanger';
import UsersDisplay from './components/UsersDisplay';


const title = 'It really does work! (this section is rendered by React, '
  + "change the app's name below to test hot reloading)";

const App = () => (
  <div>
    <ColorChanger title={title} />
    <UsersDisplay />
  </div>
);

export default hot(module)(App);
