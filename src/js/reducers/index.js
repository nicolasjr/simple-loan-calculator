import { combineReducers } from 'redux';
import calculatorReducer from './calculatorReducer';
import resultReducer from './resultReducer';

const loanCalculatorApp = combineReducers({
  calculator: calculatorReducer,
  results: resultReducer,
});

export default loanCalculatorApp;
