import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import loanCalculatorApp from '../reducers/index';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  return createStore(
    loanCalculatorApp,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
}
