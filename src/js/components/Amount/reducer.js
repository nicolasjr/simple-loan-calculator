import { actionType } from './actions';
import initialState from './model';
import { setConstraints, setCurrentValue } from '../../common';

function reducer(state = initialState, action) {
  switch (action.type) {

    case actionType.SET_CURRENT_AMOUNT:
      return setCurrentValue(state, action.amount);

    case actionType.SET_AMOUNT_CONSTRAINTS:
      return setConstraints(state, action);

    default:
      return state;
  }
}

export default reducer;
