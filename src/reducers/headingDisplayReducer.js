import * as Actions from '../actions/headingDisplayActions';

const initialState = {
  assetClassName: '',
  modelName: ''
};

const headingDisplayReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.UPDATE_HEADING_DISPLAY:
      return {
        ...state,
        assetClassName: action.payload.assetClassName,
        modelName: action.payload.modelName
      }

    default:
      return state;
  };
};

export default headingDisplayReducer;