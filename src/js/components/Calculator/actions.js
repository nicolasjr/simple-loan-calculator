import 'whatwg-fetch';
import { constraintsUrl, firstLoanUrl } from '../../apis';
import { setAmountConstraints } from '../Amount';
import { setTermConstraints } from '../Term';
import { setResults } from '../Results';
import { formatString, makeCancelable } from '../../common';

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

let requestResultsPromise;
export function requestResults(amount, term) {
  const url = formatString(firstLoanUrl, amount, term);
  return (dispatch) => {
    if (requestResultsPromise) {
      requestResultsPromise.cancel();
    }

    requestResultsPromise = makeCancelable(fetch(url));
    requestResultsPromise.promise
      .then(r => r.json())
      .then((results) => {
        dispatch(setResults(results));
      });
  };
}
