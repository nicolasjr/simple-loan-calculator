import isWithinRange from './isWithinRange';

function setCurrentValue(map, value) {
  const { min, max, step } = map.toJS();
  const newTerm = isWithinRange(min, max, step, value);
  return map.set('currentValue', newTerm);
}

export default setCurrentValue;
