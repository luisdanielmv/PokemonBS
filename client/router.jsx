import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { HomeContainer } from './containers/';
import { Nav } from './components/';

const createRouter = () => (
  <Router>
    <div className='container'>
      <Nav />
      <Route exact path='/' component={ HomeContainer } />
    </div>
  </Router>
);

export default createRouter;