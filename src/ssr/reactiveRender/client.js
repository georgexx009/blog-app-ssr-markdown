import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';

import Home from '../../sections/Home';

const state = window.__STATE__;
delete window.__STATE__;
const store = configureStore(state);

console.log('client file');
hydrate(
  <Provider store={store}>
    {' '}
    <Home />{' '}
  </Provider>,
  document.querySelector('#app')
);