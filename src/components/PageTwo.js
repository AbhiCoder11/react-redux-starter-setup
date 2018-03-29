import React,{Component} from 'react';

import {connect} from 'react-redux'

class Page extends Component{
 render(){
     const myInput=this.props.input1;
     const getInput=this.props.input2;
     return(
         <div>
             <h2>this is page 2{myInput}</h2>
             <p>this is a paragraph{getInput}</p>
          </div>   
     )
 }
}

function mapStateToProps(state){
    return{
        input1:state.setUserDataReducer.input1,
        input2:state.setUserDataReducer.input2,
    }
}
export default connect(mapStateToProps) (Page)