import {combineReducers} from 'redux'

import setUserDataReducer from './setUserDataReducer';

const rootReducer=combineReducers({
  setUserDataReducer,  
})
export default rootReducer;