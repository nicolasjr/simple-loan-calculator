import { Map } from 'immutable';

function setConstraints(map, { min, max, step, defaultValue }) {
  const currentValue = map.get('currentValue') ? map.get('currentValue') : defaultValue;
  return map.merge(new Map({
    min,
    max,
    step,
    defaultValue,
    currentValue,
  }));
}

export default setConstraints;
