import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import createSliderProps from '../../../mixins';
import Slider from './Slider';
import SliderInputLabel from './SliderInputLabel';
import { sliderProps } from '../propTypes';
import Actions, { setCurrentValue } from '../../../actions';

const propTypes = Object.assign({}, sliderProps, {
  dispatch: PropTypes.func.isRequired,
});

const AmountSlider = ({ min, max, step, value, dispatch }) => {
  const onChange = (v) => {
    dispatch(setCurrentValue(Actions.SET_CURRENT_AMOUNT, v));
  };

  return (
    <div>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
      <SliderInputLabel currentValue={value} onChange={onChange} />
    </div>
  );
};

AmountSlider.propTypes = propTypes;

function mapStateToProps(state) {
  return createSliderProps(
    state.calculator.get('amount'),
    state.calculator.get('currentAmount')
  );
}

export default connect(mapStateToProps)(AmountSlider);
