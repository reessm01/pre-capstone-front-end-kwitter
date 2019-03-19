import React, { Component } from "react"
import { TimelinePost } from "../"

export default class Timeline extends Component {
  state = {
    messages: []
  }

  render() {
    const timeLinePosts = this.props.messages.map((message, index) => (
      <TimelinePost key={ index } text={ message.text } id={ message.userId } />
    ))

    return (
        <div style={{ width: '32rem' }} id="timeline-posts">
          { timeLinePosts }
        </div>
    )
  }
}