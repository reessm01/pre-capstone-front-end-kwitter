import React, { Component } from "react"
import { TimelinePost, KweetInput } from "../"
<<<<<<< HEAD
// import { getMessages } from "../../actions/"
// import { addLike } from "../../actions/"
// import { connect } from "react-redux"
=======
import { getMessages, addLike } from "../../actions/"
import { connect } from "react-redux"
>>>>>>> a4c64bacf1c94f30ff408a3ac68dd1417b2d8f00
import { timelineStyle } from "./style"

export default class Timeline extends Component {
  state = {
    messages: []
  }

  

  render() {
    // const messages = this.props.messages.filter(message => {
    //   message.userId === 
    // })

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


