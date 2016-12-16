function isWithinRange(min, max, step, value) {
  let v = value;

  if (!v) {
    return null;
  }

  if (v < min) {
    v = min;
  } else if (v > max) {
    v = max;
  } else if (v % step !== 0) {
    v = parseInt(v / step, 10) * step;
  }
  return v;
}

export default isWithinRange;
