function createSliderProps(limits, value) {
  const { min, max, step } = limits.toJS();
  return {
    min,
    max,
    step,
    value,
  };
}

export default createSliderProps;
