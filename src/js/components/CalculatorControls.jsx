import React, { PropTypes } from 'react';
import 'whatwg-fetch';
import { connect } from 'react-redux';
import { constraintsUrl, firstLoanUrl } from '../apis/index';
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
  constructor(props) {
    super(props);
    this.handleLimitsData = this.handleLimitsData.bind(this);
    this.handleLoanData = this.handleLoanData.bind(this);
  }

  componentDidMount() {
    fetch(constraintsUrl)
      .then(s => s.json())
      .then(this.handleLimitsData);
  }

  componentWillReceiveProps(nextProps) {
    const amount = nextProps.currentAmount;
    const term = nextProps.currentTerm;

    if (!amount || !term) {
      return;
    }

    if (term !== this.props.currentTerm || amount !== this.props.currentAmount) {
      const url = `${firstLoanUrl}?amount=${amount}+&term=${term}`;
      fetch(url)
        .then(s => s.json())
        .then(this.handleLoanData);
    }
  }

  handleLimitsData(limits) {
    this.props.onSetLimits(limits);
  }

  handleLoanData(results) {
    this.props.onSetResults(results);
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
    currentAmount: state.calculatorReducer.currentAmount,
    currentTerm: state.calculatorReducer.currentTerm,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSetLimits: (limits) => {
      dispatch(setLimits(limits));
    },
    onSetResults: (results) => {
      dispatch(setResults(results));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorControls);
