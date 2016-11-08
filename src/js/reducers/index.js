import { combineReducers } from 'redux';
import calculatorReducer from './calculatorReducer';
import resultReducer from './resultReducer';

const loanCalculatorApp = combineReducers({
  calculatorReducer,
  resultReducer,
});

export default loanCalculatorApp;
