import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class Results extends React.Component {
  shouldComponentUpdate(nextProps) {
    const {
      totalPrincipal,
      term,
      totalCostOfCredit,
      totalRepayableAmount,
      monthlyPayment,
    } = this.props;

    return totalPrincipal !== nextProps.totalPrincipal ||
      term !== nextProps.term ||
      totalCostOfCredit !== nextProps.totalCostOfCredit ||
      totalRepayableAmount !== nextProps.totalRepayableAmount ||
      monthlyPayment !== nextProps.monthlyPayment;
  }

  render() {
    const {
      totalPrincipal,
      term,
      totalCostOfCredit,
      totalRepayableAmount,
      monthlyPayment,
    } = this.props;
    return (
      <div>
        <h4>TOTAL PRINCIPAL:</h4>
        <p>{totalPrincipal}</p>
        <h4>TERM:</h4>
        <p>{term}</p>
        <h4>TOTAL COST OF CREDIT:</h4>
        <p>{totalCostOfCredit}</p>
        <h4>TOTAL REPAYABLE AMOUNT:</h4>
        <p>{totalRepayableAmount}</p>
        <h4>MONTHLY PAYMENT:</h4>
        <p>{monthlyPayment}</p>
      </div>
    );
  }
}

Results.propTypes = {
  totalPrincipal: PropTypes.number.isRequired,
  term: PropTypes.number.isRequired,
  totalCostOfCredit: PropTypes.number.isRequired,
  totalRepayableAmount: PropTypes.number.isRequired,
  monthlyPayment: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  const results = state.results;
  return {
    totalPrincipal: results.get('totalPrincipal'),
    term: results.get('term'),
    totalCostOfCredit: results.get('totalCostOfCredit'),
    totalRepayableAmount: results.get('totalRepayableAmount'),
    monthlyPayment: results.get('monthlyPayment'),
  };
}

export default connect(mapStateToProps)(Results);
