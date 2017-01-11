import React, { PropTypes } from 'react';
import Slider from './Slider';
import SliderInputLabel from './SliderInputLabel';
import { valueControllerProps } from '../common';

const ValueController = ({ min, max, step, value, title, onChange }) => (
  <div>
    <h3>{title}</h3>
    <Slider min={min} max={max} step={step} value={value} onChange={onChange} />
    <SliderInputLabel value={value} onChange={onChange} />
  </div>
);

ValueController.propTypes = Object.assign({}, valueControllerProps, {
  title: PropTypes.string.isRequired,
});

export default ValueController;
