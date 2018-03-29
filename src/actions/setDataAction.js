 import * as types from './actionTypes';
 
 
 
 export default function setDataAction(ip1,ip2){
     return{
         type:"SET_USER_DATA",
         payload:{
             input1:ip1,
             input2:ip2,
         }
     }
 }