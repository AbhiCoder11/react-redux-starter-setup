import initialState from "./initialState";
import * as types from '../actions/actionTypes';

export default function setUserDataReducer(state=initialState.setUserData,action){
    switch(action.type){
      case "SET_USER_DATA":
      return{
          ...state,
          input1:action.payload.input1,
          input2:action.payload.input2,
      }
      default:
      return state;
    }

}