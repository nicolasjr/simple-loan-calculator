import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import loanCalculatorApp from '../reducers/index';
import Calculator from './Calculator';

const store = createStore(loanCalculatorApp);

function App() {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
}

export default App;
