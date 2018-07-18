import { Map, fromJS, List, isImmutable } from 'immutable';

function vote(state, entry) {
  const currentPair = state.getIn(['vote', 'pair']);
  if (currentPair && currentPair.includes(entry)) {
    return state.set('hasVoted', entry);
  }
  return state;
}

function resetVote(state) {
  const hasVoted = state.get('hasVoted');
  const currentPair = state.getIn(['vote', 'pair'], List());
  if (hasVoted && !currentPair.includes(hasVoted)) {
    return state.remove('hasVoted');
  }
  return state;
}

const reducer = (state = Map(), action) => {
  switch (action.type) {
    case 'SET_STATE':
      // const setState = !isImmutable(action.state)
      //   ? fromJS(action.state)
      //   : action.state;
      return resetVote(state.merge(fromJS(action.state)));
    case 'VOTE':
      return vote(state, action.entry);
    default:
      return state;
  }
};

export default reducer;
