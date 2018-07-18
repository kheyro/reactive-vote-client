import { Map, fromJS } from 'immutable';

const reducer = (state = Map(), action) => {
  switch (action.type) {
    case 'SET_STATE':
      // return !isImmutable(action.state) ? fromJS(action.state) : action.state;
      return state.mergeDeep(fromJS(action.state));
    default:
      return state;
  }
};

export default reducer;
