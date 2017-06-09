import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import createRouter from './router';

import './scss/main.scss';

const App = () => (
  <Provider store={ store }>
    { createRouter() }
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
