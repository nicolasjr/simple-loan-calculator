import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AmountSlider from './AmountSlider';
import TermSlider from './TermSlider';
import { setLimits, setResults } from '../../../actions';

const propTypes = {
  onSetLimits: PropTypes.func.isRequired,
  onSetResults: PropTypes.func.isRequired,
  currentAmount: PropTypes.number,
  currentTerm: PropTypes.number,
};

class Controls extends React.Component {
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

Controls.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    currentAmount: state.calculator.get('currentAmount'),
    currentTerm: state.calculator.get('currentTerm'),
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

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
