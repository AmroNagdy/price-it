import * as Actions from '../actions/ModelActions';

const initialState = { model: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOAD_MODEL:
      return {
        ...state,
        instance: action.payload.instance
      }

    case Actions.UPDATE_PARAMETER:
      // TODO: Figure out how to update output in real time.
      return state;

    default:
      return state;
  };
};