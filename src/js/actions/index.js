import Actions from './Actions';

export function setLimits(limits) {
  return {
    type: Actions.SET_LIMITS,
    limits,
  };
}

export function setAmountValue(value) {
  return {
    type: Actions.SET_CURRENT_AMOUNT,
    value,
  };
}

export function setTermValue(value) {
  return {
    type: Actions.SET_CURRENT_TERM,
    value,
  };
}

export function setResults(results) {
  return {
    type: Actions.SET_RESULTS,
    results,
  };
}
