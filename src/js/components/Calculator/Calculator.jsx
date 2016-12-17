import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import radium from 'radium';
import { requestLimits, requestResults } from './actions';
// import { Term } from '../Term';
import { Amount } from '../Amount';
import { Results } from '../Results';
import debounce from '../../common/debounce';

const styles = {
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: 30,
    width: '70%',
    maxWidth: 300,
    backgroundColor: '#72CCFF',
    borderRadius: 10,
    textAlign: 'center',
  },
  break: {
    width: '100%',
    height: 1,
    background: '#555555',
    marginTop: 25,
    marginBottom: 25,
    padding: 0,
  },
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.requestResults = debounce(this.requestResults.bind(this));
  }

  componentDidMount() {
    this.props.dispatch(requestLimits());
  }

  componentDidUpdate(prevProps) {
    const { amount, term } = this.props;
    if (prevProps.amount !== amount || prevProps.term !== term) {
      this.requestResults(amount, term);
    }
  }

  requestResults(amount, term) {
    this.props.dispatch(requestResults(amount, term));
  }

  render() {
    return (
      <div style={styles.container}>
        <Amount />
        <Amount />
        <div style={styles.break} />
        <Results />
      </div>
    );
  }
}

Calculator.propTypes = {
  dispatch: PropTypes.func,
  amount: PropTypes.number,
  term: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    amount: state.amount.get('currentValue'),
    term: state.amount.get('currentValue'),
  };
}

export default connect(mapStateToProps)(radium(Calculator));
