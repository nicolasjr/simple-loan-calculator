import { combineReducers } from 'redux';
import resultReducer from '../components/results/reducer';
import calculatorReducer from '../components/calculator/reducer';

const loanCalculatorApp = combineReducers({
  calculator: calculatorReducer,
  results: resultReducer,
});

export default loanCalculatorApp;
