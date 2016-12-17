import 'whatwg-fetch';
import { constraintsUrl, firstLoanUrl } from '../../apis';
import { setAmountConstraints } from '../Amount';
import { setTermConstraints } from '../Term';
import { setResults } from '../Results';
import { formatString } from '../../common';

export function requestLimits() {
  return (dispatch) => {
    fetch(constraintsUrl)
      .then(r => r.json())
      .then((limits) => {
        dispatch(setAmountConstraints(limits.amountInterval));
        dispatch(setTermConstraints(limits.termInterval));
      });
  };
}

export function requestResults(amount, term) {
  const url = formatString(firstLoanUrl, amount, term);
  return (dispatch) => {
    fetch(url)
      .then(r => r.json())
      .then((results) => {
        dispatch(setResults(results));
      });
  };
}
