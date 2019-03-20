import React, { Component } from "react"
import { TimelinePost } from "../"

export default class Timeline extends Component {
  state = {
    messages: []
  }
  

  render() {
    const timeLinePosts = this.props.messages.map((message, index) => (
      <TimelinePost key={ index } text={ message.text } messageID = {message.id} id={ message.userId } likes={message.likes}/>
    ))

    return (
        <div id="timeline-posts">
          { timeLinePosts }
        </div>
    )
  }
}