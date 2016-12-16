import React, { PropTypes } from 'react';
import radium from 'radium';

const styles = {
  input: {
    width: 50,
    marginLeft: 15,
    textAlign: 'center',
    backgroundColor: '#eee',
  },
};

class SliderInputLabel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
    });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleBlur(e) {
    let value = parseInt(e.target.value, 10);

    if (!value && value !== 0) {
      value = this.props.value;
    }

    this.props.onChange(value);
    this.setState({ value: this.props.value });
  }

  render() {
    return (
      <input
        style={styles.input}
        type="text"
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        value={this.state.value}
      />
    );
  }
}

SliderInputLabel.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default radium(SliderInputLabel);
