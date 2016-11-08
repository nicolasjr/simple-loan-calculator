import Actions from './Actions';

export function setLimits(limits) {
  return {
    type: Actions.SET_LIMITS,
    limits,
  };
}

export function setCurrentValue(type, value) {
  return {
    type,
    value,
  };
}

export function setResults(results) {
  return {
    type: Actions.SET_RESULTS,
    results,
  };
}
