import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import Header from './Header';
import setDataAction from './actions/setDataAction';

class App extends Component {
  // setData(e){
  //   var ip1=this.input1.value;
  //   var ip2=this.input2.value;
  //   console.log(ip1,ip2);
  //   e.preventDefault();

  // }
  render() {
    return (
      <div className="App">
      <Header/>
        <form>
          Data input 1:
          <input type="text" ref={(input1) => this.input1 = input1}/><br/>
          Data input 2:
          <input type="text" ref={(input2) => this.input2 = input2}/><br/>
          <br/>
          
          <button onClick={(e)=>{e.preventDefault();this.props.setData(this.input1.value,this.input2.value)}}>Click to go!</button>
         </form> 
       <Link to="/pagetwo">go to</Link>

      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    input1:state.input1,
    input2:state.input2,
  };
}

function mapDispatchToProps(dispatch){
  return{
    setData:(ip1,ip2)=>{
      dispatch(setDataAction(ip1,ip2))
    }
  }

}

export default connect (mapStateToProps,mapDispatchToProps) (App);
