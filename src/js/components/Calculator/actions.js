import { constraintsUrl, firstLoanUrl } from '../../apis';
import { setAmountConstraints } from '../Amount';
import { setResults } from '../Results';
import formatString from '../../common/formatString';

export function requestLimits() {
  return (dispatch) => {
    fetch(constraintsUrl)
      .then(r => r.json())
      .then((limits) => {
        dispatch(setAmountConstraints(limits.amountInterval));
      });
  };
}

export function requestResults(amount, term) {
  const url = formatString(firstLoanUrl, amount, 12);
  return (dispatch) => {
    fetch(url)
      .then(r => r.json())
      .then((results) => {
        dispatch(setResults(results));
      });
  };
}
