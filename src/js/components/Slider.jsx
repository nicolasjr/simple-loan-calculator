import React, { PropTypes } from 'react';

const propTypes = {
  limits: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.number,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const { limits: { step, min, max, value } } = this.props;
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
