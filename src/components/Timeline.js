import React, { Component } from "react"
import { TimelinePost, KweetInput } from '.'
import { getMessages } from '../actions/getMessages'
import { addLike } from '../actions/likes'
import { connect } from 'react-redux'

const timelineStyle = {
  width: '400px'
}

class Timeline extends Component {

  state = {
    messages: []
  }

  componentDidMount() {
    this.props.getMessages()
  }

  

  render() {
    const timeLinePosts = this.props.messages.map(message => (
      <TimelinePost text={message.text} id={message.userId}></TimelinePost>
    ))
    return(
      <div style={ timelineStyle }>
        <KweetInput />
        {timeLinePosts}
      </div>
    )
  }
}

function mapStateToProps({ messages }) {
  return {
    messages: messages.messages,
    id: messages.id
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
