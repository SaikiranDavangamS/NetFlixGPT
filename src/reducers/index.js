import { combineReducers } from 'redux';
import userReducer from './userReducer';
import  nowPlayingReducer  from './getNowPlayingReducer';

export default combineReducers({
  userState: userReducer,
  nowPlayingState:nowPlayingReducer
});
