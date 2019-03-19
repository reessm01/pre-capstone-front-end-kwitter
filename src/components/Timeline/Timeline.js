import React, { Component } from "react"
import { TimelinePost, KweetInput } from "../"
import { timelineStyle } from "./style"

export default class Timeline extends Component {
  state = {
    messages: []
  }

  render() {
    const timeLinePosts = this.props.messages.map((message, index) => (
      <TimelinePost key={ index } text={ message.text } id={ message.userId } />
    ))

    return (
      <div style={ timelineStyle }>
        <KweetInput />
        <div id="timeline-posts">{ timeLinePosts }</div>
      </div>
    )
  }
}

// function mapStateToProps({ messages }) {
//   return {
//     messages: messages.messages
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getMessages: () => {
//       dispatch(getMessages())
//     }
//   }
// }


