import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {increaseByTwoCounter}from "../redux/actions/counterAction.js"


 class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
      <button onClick={e=>{
        this.props.dispatch(increaseByTwoCounter())
      }}>İki Arttır</button>
    </div>
    )
  }
}
function mapDispacthToProps(dispatch) {
  return{actions:bindActionCreators(increaseByTwoCounter,dispatch)}  
  }
  export default connect(mapDispacthToProps)(IncreaseByTwoCounter)