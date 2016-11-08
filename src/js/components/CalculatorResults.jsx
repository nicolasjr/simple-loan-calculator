import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const propTypes = {
  totalPrincipal: PropTypes.number.isRequired,
  term: PropTypes.number.isRequired,
  totalCostOfCredit: PropTypes.number.isRequired,
  totalRepayableAmount: PropTypes.number.isRequired,
  monthlyPayment: PropTypes.number.isRequired,
};

function CalculatorResults({
  totalPrincipal,
  term,
  totalCostOfCredit,
  totalRepayableAmount,
  monthlyPayment,
}) {
  return (
    <div>
      <h4>Total Principal:</h4>
      <p>{totalPrincipal}</p>
      <h4>Term:</h4>
      <p>{term}</p>
      <h4>Total Cost Of Credit:</h4>
      <p>{totalCostOfCredit}</p>
      <h4>Total Repayable Amount:</h4>
      <p>{totalRepayableAmount}</p>
      <h4>Monthly Payment:</h4>
      <p>{monthlyPayment}</p>
    </div>
  );
}

CalculatorResults.propTypes = propTypes;

function mapStateToProps(state) {
  const {
    totalPrincipal,
    term,
    totalCostOfCredit,
    totalRepayableAmount,
    monthlyPayment,
  } = state.resultReducer;
  return {
    totalPrincipal,
    term,
    totalCostOfCredit,
    totalRepayableAmount,
    monthlyPayment,
  };
}

export default connect(mapStateToProps)(CalculatorResults);
