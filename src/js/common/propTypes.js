import { PropTypes } from 'react';

export const valueProps = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export const valueControllerProps = Object.assign({}, valueProps, {
  onChange: PropTypes.func,
});
