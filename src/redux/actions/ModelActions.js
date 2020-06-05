export const LOAD_MODEL = 'LOAD_MODEL';
export const UPDATE_PARAMETER = 'UPDATE_PARAMETER';

export const loadModel = instance => ({
  type: LOAD_MODEL,
  payload: { instance }
});

export const updateParameter = parameter => ({
  type: UPDATE_PARAMETER,
  payload: { parameter }
});