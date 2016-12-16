import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Slider from '../Slider';
import SliderInputLabel from '../SliderInputLabel';
import { setCurrentAmount } from './actions';

class Amount extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.dispatch(setCurrentAmount(value));
  }

  render() {
    const { min, max, step, value } = this.props;
    return (
      <div>
        <h3>AMOUNT</h3>
        <Slider min={min} max={max} step={step} value={value} onChange={this.handleChange} />
        <SliderInputLabel value={value} onChange={this.handleChange} />
      </div>
    );
  }
}

Amount.propTypes = {
  dispatch: PropTypes.func,
};

function mapStateToProps(state) {
  const amount = state.amount;
  return {
    max: amount.get('max'),
    min: amount.get('min'),
    step: amount.get('step'),
    value: amount.get('currentValue'),
  };
}

export default connect(mapStateToProps)(Amount);
