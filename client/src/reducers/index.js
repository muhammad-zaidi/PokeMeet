import { combineReducers } from 'redux';
import alert from './alerts';
import auth from './auth';

export default combineReducers({
  alert,
  auth,
});
