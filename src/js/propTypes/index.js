import { PropTypes } from 'react';

const sliderProps = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default sliderProps;