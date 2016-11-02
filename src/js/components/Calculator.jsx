import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import CalculatorControls from './CalculatorControls';
import CalculatorResults from './CalculatorResults';
import { setLimits, setResults } from '../actions/index';
import { firstLoan } from '../apis/index';

const propTypes = {
  amountLimits: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    defaultValue: PropTypes.number,
  }).isRequired,
  termLimits: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    defaultValue: PropTypes.number,
  }).isRequired,
  onSetLimits: PropTypes.func.isRequired,
  onSetResults: PropTypes.func.isRequired,
  currentValues: PropTypes.shape({
    amount: PropTypes.number,
    term: PropTypes.number,
  }),
  results: PropTypes.shape({
    totalPrincipal: PropTypes.string.isRequired,
    term: PropTypes.string.isRequired,
    totalCostOfCredit: PropTypes.number.isRequired,
    totalRepayableAmount: PropTypes.number.isRequired,
    monthlyPayment: PropTypes.number.isRequired,
  }),
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleData = this.handleData.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const amount = nextProps.currentValues.amount;
    const term = nextProps.currentValues.term;

    if (!amount || !term) {
      return;
    }

    if (term !== this.props.currentValues.term || amount !== this.props.currentValues.amount) {
      const url = `${firstLoan}?amount=${amount}+&term=${term}`;
      $.ajax({
        url,
        success: this.handleData,
        dataType: 'json',
        cache: true,
      });
    }
  }

  handleData(results) {
    this.props.onSetResults(results);
  }

  render() {
    const { amountLimits, termLimits, currentValues, onSetLimits, results } = this.props;
    return (
      <div>
        <CalculatorControls
          amountLimits={amountLimits}
          termLimits={termLimits}
          currentValues={currentValues}
          onSetLimits={onSetLimits}
        />
        <CalculatorResults results={results} />
      </div>
    );
  }
}

Calculator.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    amountLimits: state.limitsReducer.amount,
    termLimits: state.limitsReducer.term,
    currentValues: {
      amount: state.limitsReducer.currentAmount,
      term: state.limitsReducer.currentTerm,
    },
    results: state.resultReducer,
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

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
