import { combineReducers } from 'redux';
import ModelReducer from './ModelReducer';

export default combineReducers({
  model: ModelReducer
});