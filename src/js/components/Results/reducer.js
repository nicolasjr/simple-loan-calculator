import { fromJS } from 'immutable';
import { actionType } from './actions';
import initialState from './model';

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.SET_RESULTS:
      {
        const {
          totalPrincipal,
          term,
          totalCostOfCredit,
          totalRepayableAmount,
          monthlyPayment,
        } = action.results;

        return state.merge(fromJS({
          totalPrincipal: parseInt(totalPrincipal, 10),
          term: parseInt(term, 10),
          totalCostOfCredit: parseInt(totalCostOfCredit, 10),
          totalRepayableAmount: parseInt(totalRepayableAmount, 10),
          monthlyPayment: parseInt(monthlyPayment, 10),
        }));
      }
    default:
      return state;
  }
}

export default reducer;
