import { combineReducers } from 'redux';
import resultReducer from './resultReducer';
import calculatorReducer from './calculatorReducer';

const loanCalculatorApp = combineReducers({
  calculator: calculatorReducer,
  results: resultReducer,
});

export default loanCalculatorApp;
