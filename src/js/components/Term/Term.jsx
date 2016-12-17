import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ValueController from '../ValueController';
import { setCurrentTerm } from './actions';
import { getConstraintsAndValue, valueProps } from '../../common';

class Term extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.dispatch(setCurrentTerm(value));
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
        title="TERM"
      />
    );
  }
}

Term.propTypes = Object.assign({}, valueProps, {
  dispatch: PropTypes.func,
});

function mapStateToProps(state) {
  return getConstraintsAndValue(state.term);
}

export default connect(mapStateToProps)(Term);
