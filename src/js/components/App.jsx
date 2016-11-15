import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loanCalculatorApp from '../reducers/index';
import { Controls } from './calculator';
import { Results } from './results';

const store = applyMiddleware(thunk)(createStore)(loanCalculatorApp);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Controls />
        <Results />
      </div>
    </Provider>
  );
}

export default App;
