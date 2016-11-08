import { Map } from 'immutable';
import Actions from '../actions/Actions';

const defaultState = new Map({
  totalPrincipal: 0,
  term: 0,
  totalCostOfCredit: 0,
  totalRepayableAmount: 0,
  monthlyPayment: 0,
});

function resultReducer(state = defaultState, action) {
  switch (action.type) {
    case Actions.SET_RESULTS:
      return state.merge(action.results);
    default:
      return state;
  }
}

export default resultReducer;
