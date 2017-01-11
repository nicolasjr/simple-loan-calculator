import { expect } from 'chai';
import isWithinRange from './isWithinRange';

describe('Test suite for isWithinRange method', () => {
  const min = 10;
  const max = 1000;
  const step = 10;

  const checkValue = value => isWithinRange(min, max, step, value);

  it('returns same value when value is within range and divisible by the step', () => {
    let value = 50;
    expect(checkValue(value)).to.equal(value);
    value = 60;
    expect(checkValue(value)).to.equal(value);
    value = 150;
    expect(checkValue(value)).to.equal(value);
  });

  it('returns min when value is smaller than min', () => {
    const value = min - step;
    expect(checkValue(value)).to.equal(min);
  });

  it('returns max when value is bigger than max', () => {
    const value = max + step;
    expect(checkValue(value)).to.equal(max);
  });

  it('returns a number divisible by step when value is not', () => {
    const value = min + (step / 2);
    expect(checkValue(value)).to.equal(min);
  });
});
