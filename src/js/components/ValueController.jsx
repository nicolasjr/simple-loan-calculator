import React, { PropTypes } from 'react';
import Slider from './Slider';
import SliderInputLabel from './SliderInputLabel';
import { valueControllerProps } from '../common';

class ValueController extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.onChange(value);
  }

  render() {
    const { min, max, step, value, title } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <Slider min={min} max={max} step={step} value={value} onChange={this.handleChange} />
        <SliderInputLabel value={value} onChange={this.handleChange} />
      </div>
    );
  }
}

ValueController.propTypes = Object.assign({}, valueControllerProps, {
  title: PropTypes.string.isRequired,
});

export default ValueController;
