import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {increaseCounter}from "../redux/actions/counterAction.js"
 class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={e=>{
          this.props.dispatch(increaseCounter())
        }}>Bir Arttır</button>
      </div>
    )
  }
}

function mapDispacthToProps(dispatch) {
return{actions:bindActionCreators(increaseCounter,dispatch)}  
}
export default connect(mapDispacthToProps)(IncreaseCounter)