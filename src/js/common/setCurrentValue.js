import isWithinRange from './isWithinRange';

function setCurrentValue(map, value) {
  const { min, max, step } = map.toJS();
  const newValue = isWithinRange(min, max, step, value);
  return map.set('currentValue', newValue);
}

export default setCurrentValue;
