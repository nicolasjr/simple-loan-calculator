import { fromJS } from 'immutable';

const initialState = fromJS({
  max: 0,
  min: 0,
  step: 0,
  defaultValue: 0,
  currentValue: 0,
});

export default initialState;
