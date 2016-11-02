import React, { PropTypes } from 'react';

const propTypes = {
  results: PropTypes.shape({
    totalPrincipal: PropTypes.string.isRequired,
    term: PropTypes.string.isRequired,
    totalCostOfCredit: PropTypes.number.isRequired,
    totalRepayableAmount: PropTypes.number.isRequired,
    monthlyPayment: PropTypes.number.isRequired,
  }),
};

function CalculatorResults({ results }) {
  return (
    <div>
      <h4>Total Principal:</h4>
      <p>{results.totalPrincipal}</p>
      <h4>Term:</h4>
      <p>{results.term}</p>
      <h4>Total Cost Of Credit:</h4>
      <p>{results.totalCostOfCredit}</p>
      <h4>Total Repayable Amount:</h4>
      <p>{results.totalRepayableAmount}</p>
      <h4>Monthly Payment:</h4>
      <p>{results.monthlyPayment}</p>
    </div>
  );
}

CalculatorResults.propTypes = propTypes;

export default CalculatorResults;
