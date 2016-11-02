import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setAmountValue } from '../actions/index';
import Slider from './Slider';
import SliderInputLabel from './SliderInputLabel';

const AmountSlider = ({ limits, dispatch }) => {
  const onChange = (value) => {
    dispatch(setAmountValue(value));
  };

  return (
    <div>
      <Slider limits={limits} onChange={onChange} />
      <SliderInputLabel currentValue={limits.value} onChange={onChange} />
    </div>
  );
};

AmountSlider.propTypes = {
  limits: PropTypes.shape().isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AmountSlider);
