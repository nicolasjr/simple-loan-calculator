import { actionType } from './actions';
import initialState from './model';
import { setConstraints, setCurrentValue } from '../../common';

function reducer(state = initialState, action) {
  switch (action.type) {

    case actionType.SET_CURRENT_TERM:
      return setCurrentValue(state, action.term);

    case actionType.SET_TERM_CONSTRAINTS:
      return setConstraints(state, action);

    default:
      return state;
  }
}

export default reducer;
