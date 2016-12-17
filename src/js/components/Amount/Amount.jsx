import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ValueController from '../ValueController';
import { setCurrentAmount } from './actions';
import { getConstraintsAndValue, valueProps } from '../../common';

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
      <ValueController
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={this.handleChange}
        title="AMOUNT"
      />
    );
  }
}

Amount.propTypes = Object.assign({}, valueProps, {
  dispatch: PropTypes.func,
});

function mapStateToProps(state) {
  return getConstraintsAndValue(state.amount);
}

export default connect(mapStateToProps)(Amount);
