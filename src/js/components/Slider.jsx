import React, { PropTypes } from 'react';
import sliderProps from '../propTypes/index';

const propTypes = Object.assign({}, sliderProps, {
  onChange: PropTypes.func.isRequired,
});

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const { step, min, max, value } = this.props;
    return (
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}

Slider.propTypes = propTypes;

export default Slider;
