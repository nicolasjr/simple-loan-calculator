import React from 'react';
import { connect } from 'react-redux';
import { setCurrentValue } from '../actions/index';
import { createSliderProps } from '../mixins/index';
import Slider from './Slider';
import SliderInputLabel from './SliderInputLabel';
import { sliderProps } from '../propTypes/index';
import Actions from '../actions/Actions';

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

AmountSlider.propTypes = sliderProps;

function mapStateToProps(state) {
  return createSliderProps(
    state.calculator.amount,
    state.calculator.currentAmount
  );
}

export default connect(mapStateToProps)(AmountSlider);
