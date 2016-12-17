export const actionType = {
  SET_CURRENT_TERM: 'term/SET_CURRENT_TERM',
  SET_TERM_CONSTRAINTS: 'term/SET_TERM_CONSTRAINTS',
};

export function setCurrentTerm(term) {
  return {
    type: actionType.SET_CURRENT_TERM,
    term,
  };
}

export function setTermConstraints({ min, max, step, defaultValue }) {
  return {
    type: actionType.SET_TERM_CONSTRAINTS,
    min,
    max,
    step,
    defaultValue,
  };
}
