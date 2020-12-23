import React from 'react';
import Routes from './Routes';

import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <Routes />
    <Link to="/login">login</Link>
    <Link to="/profile">profil</Link>
  </div>
);

export default App;
