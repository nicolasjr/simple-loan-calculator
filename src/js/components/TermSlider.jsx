import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setTermValue } from '../actions/index';
import Slider from './Slider';
import SliderInputLabel from './SliderInputLabel';

const TermSlider = ({ limits, dispatch }) => {
  const onChange = (value) => {
    dispatch(setTermValue(value));
  };

  return (
    <div>
      <Slider limits={limits} onChange={onChange} />
      <SliderInputLabel currentValue={limits.value} onChange={onChange} />
    </div>
  );
};

TermSlider.propTypes = {
  limits: PropTypes.shape().isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(TermSlider);
