import React, { PropTypes } from 'react';

const propTypes = {
  currentValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

class SliderInputLabel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.currentValue,
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
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

  handleFocus() {
    this.setState({
      focus: true,
    });
  }

  handleBlur(e) {
    this.props.onChange(e.target.value);
    this.setState({
      focus: false,
    });
  }

  render() {
    return (
      <input
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        value={this.state.value}
      />
    );
  }
}

SliderInputLabel.propTypes = propTypes;

export default SliderInputLabel;
