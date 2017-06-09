import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { HomeContainer } from './containers/';
import { Nav, Details} from './components/';

const createRouter = () => (
  <Router>
    <div className='container'>
      <Nav />
      <Route exact path='/' render={ () => <Redirect to='/home' /> } />
      <Route path='/home' component={ HomeContainer } />
    </div>
  </Router>
);

export default createRouter;