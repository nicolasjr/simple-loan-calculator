import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loanCalculatorApp from '../reducers';
import Calculator from './Calculator';

const store = createStore(
  loanCalculatorApp,
  applyMiddleware(thunk),
);

const App = () => (
  <Provider store={store}>
    <Calculator />
  </Provider>
);

export default App;
