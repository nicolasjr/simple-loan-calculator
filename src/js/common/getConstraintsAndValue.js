function getConstraintsAndValue(map) {
  return {
    max: map.get('max'),
    min: map.get('min'),
    step: map.get('step'),
    value: map.get('currentValue'),
  };
}

export default getConstraintsAndValue;
