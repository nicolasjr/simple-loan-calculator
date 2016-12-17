import { combineReducers } from 'redux';
import results from '../components/Results/reducer';
import amount from '../components/Amount';

const loanCalculatorApp = combineReducers({
  amount,
  results,
});

export default loanCalculatorApp;
