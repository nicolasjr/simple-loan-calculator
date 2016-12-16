import React, { PropTypes } from 'react';
import sliderProps from '../common/propTypes';

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(parseInt(e.target.value, 10));
  }

  render() {
    return (
      <input type="range" {...this.props} onChange={this.handleChange} />
    );
  }
}

Slider.propTypes = Object.assign({}, sliderProps, {
  onChange: PropTypes.func.isRequired,
});

export default Slider;
