import { combineReducers } from 'redux';
import ModelReducer from 'redux/reducers/ModelReducer';

export default combineReducers({
  model: ModelReducer
});