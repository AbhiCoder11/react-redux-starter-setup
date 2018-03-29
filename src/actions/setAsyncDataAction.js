
//this ActionCreator will handle API call to fetch flight details

import axios from "axios";
import * as types from '../actions/actionTypes'

 export  default  function setFlightDataAction(ft,fr,dep,ret,at,ch,inft) {
    return function(dispatch) {
        dispatch({type:types.FETCH_ASYNC_ACTION_START});

        axios.post('http://192.168.0.88/serices/demo', {
            "ADT": at,
            "CHD": ch,
            "DepartDate": dep,
            "Destination": ft,
            "INF": inft,
            "IsDomestic": true,
            "Key": "",
            "Origin": fr,
            "PortalID": 1,
            "ReturnDate": ret,
            "SearchID": 0

        })
            .then((response) => {
                dispatch({type:types.RECEIVE_ASYNC_DETAILS, payload: response.data})
            })
            .catch((err) => {
                dispatch({type:types.ASYNC_ACTION_ERROR, payload: err})
            })
    }
}

