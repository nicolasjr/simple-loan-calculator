import Actions from '../actions/Actions';

const initialState = {
  amount: {
    min: 0,
    max: 0,
    step: 0,
    defaultValue: 0,
  },
  term: {
    min: 0,
    max: 0,
    step: 0,
    defaultValue: 0,
  },
  currentAmount: 0,
  currentTerm: 0,
};

function setLimits(state, limits) {
  return Object.assign({}, state, {
    amount: {
      min: limits.amountInterval.min,
      max: limits.amountInterval.max,
      step: limits.amountInterval.step,
      defaultValue: limits.amountInterval.defaultValue,
    },
    term: {
      min: limits.termInterval.min,
      max: limits.termInterval.max,
      step: limits.termInterval.step,
      defaultValue: limits.termInterval.defaultValue,
    },
    currentAmount: limits.amountInterval.defaultValue,
    currentTerm: limits.termInterval.defaultValue,
  });
}

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
  const currentTerm = fixValueToBeSet(term, state.term);

  if (!currentTerm) {
    return state.currentTerm;
  }

  return Object.assign({}, state, {
    currentTerm,
  });
}

function setAmount(state, amount) {
  const currentAmount = fixValueToBeSet(amount, state.amount);

  if (!currentAmount) {
    return state.currentAmount;
  }

  return Object.assign({}, state, {
    currentAmount,
  });
}

function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_LIMITS:
      return setLimits(state, action.limits);
    case Actions.SET_CURRENT_AMOUNT:
      return setAmount(state, action.value);
    case Actions.SET_CURRENT_TERM:
      return setTerm(state, action.value);
    default:
      return state;
  }
}

export default calculatorReducer;
