import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import radium from 'radium';
import { requestLimits } from './actions';
// import { Term } from '../Term';
import { Amount } from '../Amount';
import { Results } from '../Results';

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
  componentDidMount() {
    this.props.dispatch(requestLimits());
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
};

export default connect()(radium(Calculator));
