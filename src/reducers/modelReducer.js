import * as Actions from '../actions/modelActions';

const initialState = {
  activeModel: null
};

const activeModelReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOAD_MODEL:
      return {
        ...state,
        activeModel: action.payload.model
      }

    default:
      return state;
  };
};

export default activeModelReducer;