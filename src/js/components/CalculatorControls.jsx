import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TermSlider from './TermSlider';
import AmountSlider from './AmountSlider';
import { setLimits, setResults } from '../actions/index';

const propTypes = {
  onSetLimits: PropTypes.func.isRequired,
  onSetResults: PropTypes.func.isRequired,
  currentAmount: PropTypes.number,
  currentTerm: PropTypes.number,
};

class CalculatorControls extends React.Component {
  componentDidMount() {
    this.props.onSetLimits();
  }

  componentWillReceiveProps(nextProps) {
    const amount = nextProps.currentAmount;
    const term = nextProps.currentTerm;

    if (!amount || !term) {
      return;
    }

    if (term !== this.props.currentTerm || amount !== this.props.currentAmount) {
      this.props.onSetResults(amount, term);
    }
  }

  render() {
    return (
      <div>
        <AmountSlider />
        <TermSlider />
      </div>
    );
  }
}

CalculatorControls.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    currentAmount: state.calculator.currentAmount,
    currentTerm: state.calculator.currentTerm,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSetLimits: () => {
      dispatch(setLimits());
    },
    onSetResults: (amount, term) => {
      dispatch(setResults(amount, term));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorControls);
