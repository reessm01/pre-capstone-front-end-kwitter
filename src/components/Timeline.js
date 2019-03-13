import React, { Component } from "react"
import { TimelinePost } from '.'
import {getMessages} from '../actions/getMessages'
import {addLike} from '../actions/likes'
import {connect} from 'react-redux'

class Timeline extends Component {

  state = {
    messages: []
  }

  componentDidMount() {
    this.props.getMessages()
  }

  render() {
    const timeLinePosts = this.props.messages.messages.map(message => (
      <TimelinePost text={message.text}></TimelinePost>
    ))
    return(
      <div>
        {timeLinePosts}
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
    },
    addLike: () => {
      dispatch(addLike())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline)
