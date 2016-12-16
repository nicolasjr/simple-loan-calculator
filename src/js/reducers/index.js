import { combineReducers } from 'redux';
import resultReducer from '../components/Results/reducer';
import amount from '../components/Amount';

const loanCalculatorApp = combineReducers({
  amount,
  results: resultReducer,
});

export default loanCalculatorApp;
