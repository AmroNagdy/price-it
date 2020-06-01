import { combineReducers } from 'redux';
import modelReducer from './modelReducer.js';

const allReducers = combineReducers({
  model: modelReducer
});

export default allReducers