export const actionType = {
  SET_RESULTS: 'results/SET_RESULTS',
};

export function setResults(results) {
  return {
    type: actionType.SET_RESULTS,
    results,
  };
}
