import 'whatwg-fetch';
import Actions from './Actions';
import { constraintsUrl, firstLoanUrl } from '../apis/index';

function applyLimits(limits) {
  return {
    type: Actions.SET_LIMITS,
    limits,
  };
}

function applyDefaultValues(defaultAmount, defaultTerm) {
  return {
    type: Actions.SET_INITIAL_VALUES,
    defaultAmount,
    defaultTerm,
  };
}

export function setLimits() {
  return (dispatch) => {
    fetch(constraintsUrl)
      .then(r => r.json())
      .then((limits) => {
        dispatch(applyLimits(limits));
        dispatch(applyDefaultValues(
          limits.amountInterval.defaultValue,
          limits.termInterval.defaultValue
        ));
      });
  };
}

export function setCurrentValue(type, value) {
  return {
    type,
    value,
  };
}

function applyResults(results) {
  return {
    type: Actions.SET_RESULTS,
    results,
  };
}

let currentAmount = 0;
let currentTerm = 0;

export function setResults(amount, term) {
  currentAmount = amount;
  currentTerm = term;
  return (dispatch) => {
    const url = `${firstLoanUrl}?amount=${amount}+&term=${term}`;
    fetch(url)
      .then(s => s.json())
      .then((results) => {
        if (currentAmount === amount && currentTerm === term) {
          dispatch(applyResults(results));
        }
      });
  };
}
