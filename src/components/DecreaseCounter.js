import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {decreaseCounter}from "../redux/actions/counterAction.js"

 class DecreaseCounter extends Component {
  render() {
    return (
      <div>
        <button className="btn " onClick={e=>{
          this.props.dispatch(decreaseCounter())
        }}>Bir Azalt</button>
      </div>
    )
  }
}

function mapDispacthToProps(dispatch) {
  return{actions:bindActionCreators(decreaseCounter,dispatch)}  
  }
  export default connect(mapDispacthToProps)(DecreaseCounter)