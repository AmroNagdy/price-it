import { combineReducers } from 'redux';
import headingDisplayReducer from './headingDisplayReducer.js';

const allReducers = combineReducers({
  headingDisplay: headingDisplayReducer
});

export default allReducers