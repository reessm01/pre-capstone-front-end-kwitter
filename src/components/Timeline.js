import React, { Component } from "react"
import TimeLinePost from './TimelinePost'
import {getMessages} from '../actions/getMessages'
import {connect} from 'react-redux'

class Timeline extends Component {

  state = {
    messages: []
  }

  componentDidMount() {
   this.props.getMessages()
  }

  render() {
    console.log(this.props.messages)
    return(
    <div>
    {this.props.messages.messages.map(message => (
        <TimeLinePost text={message.text}></TimeLinePost>
    ))}
    </div>
    )
    
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return{
    getMessages: () => {
      dispatch(getMessages())
    }
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline)
