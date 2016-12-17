import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loanCalculatorApp from '../reducers';
import Calculator from './Calculator';

const store = applyMiddleware(thunk)(createStore)(loanCalculatorApp);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Calculator />
      </div>
    </Provider>
  );
}

export default App;
