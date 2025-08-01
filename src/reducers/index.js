import { combineReducers } from 'redux';
import userReducer from './userReducer';
import  nowPlayingReducer  from './getNowPlayingReducer';
import gptReducer from './gptReducer';
import configReducer from './configReducer';

export default combineReducers({
  userState: userReducer,
  nowPlayingState:nowPlayingReducer,
  gptReducer:gptReducer,
  configReducer:configReducer
});
