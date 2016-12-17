import React from 'react';
import { valueControllerProps } from '../common';

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

Slider.propTypes = valueControllerProps;

export default Slider;
