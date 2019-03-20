import React, { Component } from "react"
import { TimelinePost } from "../"

export default class Timeline extends Component {
  render() {
    const { messages } = this.props

    const timeLinePosts = messages.map((message, index) => (
      <TimelinePost 
        key={ index }
        text={ message.text }
        id={ message.userId }
        messageId={ message.id }
        likes={ message.likes }
      />
    ))

    return (
      <div id="timeline-posts">
        { timeLinePosts }
      </div>
    )
  }
}