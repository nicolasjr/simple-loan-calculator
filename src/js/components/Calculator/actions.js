import { constraintsUrl } from '../../apis';
import { setAmountConstraints } from '../Amount';

export function requestLimits() {
  return (dispatch) => {
    fetch(constraintsUrl)
      .then(r => r.json())
      .then((limits) => {
        dispatch(setAmountConstraints(limits.amountInterval));
      });
  };
}
