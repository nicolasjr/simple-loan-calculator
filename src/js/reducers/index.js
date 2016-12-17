import { combineReducers } from 'redux';
import results from '../components/Results/reducer';
import amount from '../components/Amount';
import term from '../components/Term';

const loanCalculatorApp = combineReducers({
  amount,
  term,
  results,
});

export default loanCalculatorApp;
