import { combineReducers } from 'redux';
import limitsReducer from './limitsReducer';
import resultReducer from './resultReducer';

const loanCalculatorApp = combineReducers({
  limitsReducer,
  resultReducer,
});

export default loanCalculatorApp;
