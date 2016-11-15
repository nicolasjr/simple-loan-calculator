import { Map } from 'immutable';
import Actions from '../../actions';

function createLimit(min, max, step, defaultValue) {
  return new Map({ min, max, step, defaultValue });
}

function createLimitFromInterval(interval) {
  const { min, max, step, defaultValue } = interval;
  return createLimit(min, max, step, defaultValue);
}

const initialState = new Map({
  amount: createLimit(0, 0, 0, 0),
  term: createLimit(0, 0, 0, 0),
  currentAmount: -1,
  currentTerm: -1,
});

function fixValueToBeSet(value, limits) {
  let v = parseInt(value, 10);

  if (!v) {
    return null;
  }

  if (v < limits.min) {
    v = limits.min;
  } else if (v > limits.max) {
    v = limits.max;
  } else if (v % limits.step !== 0) {
    v = parseInt(v / limits.step, 10) * limits.step;
  }
  return v;
}

function setTerm(state, term) {
  const currentTerm = fixValueToBeSet(term, state.get('term').toJS());
  return currentTerm || state.currentTerm;
}

function setAmount(state, amount) {
  const currentAmount = fixValueToBeSet(amount, state.get('amount').toJS());
  return currentAmount || state.currentAmount;
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_LIMITS:
      return state.merge({
        amount: createLimitFromInterval(action.limits.amountInterval),
        term: createLimitFromInterval(action.limits.termInterval),
      });
    case Actions.SET_INITIAL_VALUES:
      if (state.get('currentTerm') < 0 && state.get('currentAmount') < 0) {
        return state.merge({
          currentAmount: action.defaultAmount,
          currentTerm: action.defaultTerm,
        });
      }
      return state;
    case Actions.SET_CURRENT_AMOUNT:
      return state.set('currentAmount', setAmount(state, action.value));
    case Actions.SET_CURRENT_TERM:
      return state.set('currentTerm', setTerm(state, action.value));
    default:
      return state;
  }
}

export default reducer;
