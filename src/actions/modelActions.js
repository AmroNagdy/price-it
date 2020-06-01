export const LOAD_MODEL = 'LOAD_MODEL';

export const loadModel = model => ({
  type: LOAD_MODEL,
  payload: { model }
});