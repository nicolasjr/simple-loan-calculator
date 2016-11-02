import React, { PropTypes } from 'react';
import $ from 'jquery';
import { constraints } from '../apis/index';
import TermSlider from './TermSlider';
import AmountSlider from './AmountSlider';

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
  currentValues: PropTypes.shape({
    amount: PropTypes.number,
    term: PropTypes.number,
  }),
};

class CalculatorControls extends React.Component {
  static getLimits(limits, currentValue) {
    return {
      min: limits.min,
      max: limits.max,
      step: limits.step,
      value: currentValue || limits.defaultValue,
    };
  }

  constructor(props) {
    super(props);
    this.handleData = this.handleData.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: constraints,
      success: this.handleData,
      dataType: 'json',
      cache: true,
    });
  }

  handleData(limits) {
    this.props.onSetLimits(limits);
  }

  loadTermSlider() {
    const limits = CalculatorControls.getLimits(
      this.props.termLimits,
      this.props.currentValues.term
    );
    return <TermSlider limits={limits} />;
  }

  loadAmountSlider() {
    const limits = CalculatorControls.getLimits(
      this.props.amountLimits,
      this.props.currentValues.amount
    );
    return <AmountSlider limits={limits} />;
  }

  render() {
    return (
      <div>
        {this.loadAmountSlider()}
        {this.loadTermSlider()}
      </div>
    );
  }
}

CalculatorControls.propTypes = propTypes;

export default CalculatorControls;
