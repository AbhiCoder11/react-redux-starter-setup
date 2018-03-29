
//this Reducer will be handle API data response

import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export  default  function setFlightDataReducer(state=initialState.setAsyncDataReducer,action){
    switch (action.type){

        case types.FETCH_ASYNC_ACTION_START: {
            return {...state, fetching: true,}
            break;
        }
        case types.ASYNC_ACTION_ERROR:{
            return{...state,fetching:false,error:action.payload,}
        }
            break;
        case types.RECEIVE_ASYNC_DETAILS:{
            return{...state,fetching:false,fetched:true,AsyncData:action.payload,}
            break;
        }
        default:
            return state;
    }
}