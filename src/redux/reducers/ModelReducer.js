import * as Actions from '../actions/ModelActions';

const initialState = {
  assetClass: null,
  name: null,
  parameters: null,
  priceFunction: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOAD_MODEL:
      return {
        ...state,
        assetClass: action.payload.model.assetClass,
        name: action.payload.model.name,
        parameters: action.payload.model.parameters,
        priceFunction: action.payload.model.priceFunction
      }

    case Actions.UPDATE_PARAMETER:
      const newParameters = { ...state.parameters };
      newParameters[action.payload.parameterName].value = action.payload.newValue;

      return {
        ...state,
        parameters: newParameters
      };

    default:
      return state;
  };
};