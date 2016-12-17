import { Map } from 'immutable';
import { actionType } from './actions';
import initialState from './model';
import { isWithinRange } from '../../mixins';

function reducer(state = initialState, action) {
  switch (action.type) {

    case actionType.SET_CURRENT_TERM:
      {
        const { min, max, step } = state.toJS();
        const newTerm = isWithinRange(min, max, step, action.term);
        return state.set('currentValue', newTerm);
      }

    case actionType.SET_TERM_CONSTRAINTS:
      {
        const { min, max, step, defaultValue } = action;
        const currentValue = state.get('currentValue') ? state.get('currentValue') : defaultValue;
        return state.merge(new Map({
          min,
          max,
          step,
          defaultValue,
          currentValue,
        }));
      }

    default:
      return state;
  }
}

export default reducer;
