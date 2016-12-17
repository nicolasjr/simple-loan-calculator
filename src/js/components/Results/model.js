import { fromJS } from 'immutable';

const initialState = fromJS({
  totalPrincipal: 0,
  term: 0,
  totalCostOfCredit: 0,
  totalRepayableAmount: 0,
  monthlyPayment: 0,
});

export default initialState;
