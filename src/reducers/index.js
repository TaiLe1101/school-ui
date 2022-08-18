import { combineReducers } from 'redux';
import validationReducer from './validation';

const rootReducer = combineReducers({
  validation: validationReducer,
});

export default rootReducer;
