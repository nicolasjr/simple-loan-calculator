import React, { PropTypes } from 'react';

class SliderInputLabel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.currentValue,
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.currentValue,
    });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleBlur(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <input onChange={this.handleChange} onBlur={this.handleBlur} value={this.state.value} />
    );
  }
}

SliderInputLabel.propTypes = {
  currentValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SliderInputLabel;
