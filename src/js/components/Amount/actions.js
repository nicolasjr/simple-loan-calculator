export const actionType = {
  SET_CURRENT_AMOUNT: 'amount/SET_CURRENT_AMOUNT',
  SET_AMOUNT_CONSTRAINTS: 'amount/SET_AMOUNT_CONSTRAINTS',
};

export function setCurrentAmount(amount) {
  return {
    type: actionType.SET_CURRENT_AMOUNT,
    amount,
  };
}

export function setAmountConstraints({ min, max, step, defaultValue }) {
  return {
    type: actionType.SET_AMOUNT_CONSTRAINTS,
    min,
    max,
    step,
    defaultValue,
  };
}
