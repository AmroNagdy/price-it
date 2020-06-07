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
      const model = action.payload.model;
      const { assetClass, name, parameters, priceFunction } = model;

      return { ...state, assetClass, name, parameters, priceFunction };

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