import { Map, fromJS } from 'immutable';

function vote(state, entry) {
  const currentPair = state.getIn(['vote', 'pair']);
  if (currentPair && currentPair.includes(entry)) {
    return state.set('hasVoted', entry);
  }
  return state;
}

const reducer = (state = Map(), action) => {
  switch (action.type) {
    case 'SET_STATE':
      // return !isImmutable(action.state) ? fromJS(action.state) : action.state;
      return state.mergeDeep(fromJS(action.state));
    case 'VOTE':
      return vote(state, action.entry);
    default:
      return state;
  }
};

export default reducer;
