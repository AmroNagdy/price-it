export const LOAD_MODEL = 'LOAD_MODEL';
export const UPDATE_PARAMETER = 'UPDATE_PARAMETER';

export const loadModel = model => ({
  type: LOAD_MODEL,
  payload: { model }
});

export const updateParameter = (parameterName, newValue) => ({
  type: UPDATE_PARAMETER,
  payload: { parameterName, newValue }
});