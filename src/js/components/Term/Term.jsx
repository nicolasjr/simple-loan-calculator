import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Slider from '../Slider';
import SliderInputLabel from '../SliderInputLabel';
import { setCurrentTerm } from './actions';

class Term extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    const { dispatch } = this.props;
    dispatch(setCurrentTerm(value));
  }

  render() {
    const { min, max, step, value } = this.props;
    return (
      <div>
        <h3>TERM</h3>
        <Slider min={min} max={max} step={step} value={value} onChange={this.handleChange} />
        <SliderInputLabel value={value} onChange={this.handleChange} />
      </div>
    );
  }
}

Term.propTypes = {
  dispatch: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
};

function mapStateToProps(state) {
  const term = state.term;
  return {
    max: term.get('max'),
    min: term.get('min'),
    step: term.get('step'),
    value: term.get('currentValue'),
  };
}

export default connect(mapStateToProps)(Term);
