import React, { Component } from "react"
import { TimelinePost, KweetInput } from "."
import { getMessages } from "../actions/getMessages"
import { addLike } from "../actions/likes"
import { connect } from "react-redux"

const timelineStyle = {
  width: "32rem"
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
      <TimelinePost text={message.text} id={message.userId} />
    ))

    return (
      <div style={timelineStyle}>
        <KweetInput />
        <div id="timeline-posts">{timeLinePosts}</div>
      </div>
    )
  }
}

function mapStateToProps({ messages }) {
  return {
    messages: messages.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => {
      dispatch(getMessages())
    },
    addLike: () => {
      dispatch(addLike())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline)
