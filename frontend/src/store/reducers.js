import { combineReducers } from 'redux';
import authReducer from './Authentication/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
