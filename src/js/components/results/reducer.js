import { Map } from 'immutable';
import Actions from '../../actions';

const defaultState = new Map({
  totalPrincipal: 0,
  term: 0,
  totalCostOfCredit: 0,
  totalRepayableAmount: 0,
  monthlyPayment: 0,
});

function setResults(state, results) {
  const {
    totalPrincipal,
    term,
    totalCostOfCredit,
    totalRepayableAmount,
    monthlyPayment,
  } = results;

  return state.merge({
    totalPrincipal: parseInt(totalPrincipal, 10),
    term: parseInt(term, 10),
    totalCostOfCredit: parseInt(totalCostOfCredit, 10),
    totalRepayableAmount: parseInt(totalRepayableAmount, 10),
    monthlyPayment: parseInt(monthlyPayment, 10),
  });
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case Actions.SET_RESULTS:
      return setResults(state, action.results);
    default:
      return state;
  }
}

export default reducer;
