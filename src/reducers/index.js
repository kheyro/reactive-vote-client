import { Map, fromJS, isImmutable } from 'immutable';

const reducer = (state = Map(), action) => {
  switch (action.type) {
    case 'SET_STATE':
      return !isImmutable(action.state) ? fromJS(action.state) : action.state;
    default:
      return state;
  }
};

export default reducer;
