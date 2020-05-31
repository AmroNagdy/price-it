export const UPDATE_HEADING_DISPLAY = 'UPDATE_HEADING_DISPLAY';

export const updateHeadingDisplay = (assetClassName, modelName) => ({
  type: UPDATE_HEADING_DISPLAY,
  payload: { assetClassName, modelName }
});