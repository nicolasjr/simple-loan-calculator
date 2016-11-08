export function createSliderProps(limits, value) {
  const { min, max, step } = limits;
  return {
    min,
    max,
    step,
    value,
  };
}
