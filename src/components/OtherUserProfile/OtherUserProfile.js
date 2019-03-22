import React, { Component } from "react"
import { GeneralHeader, Timeline, OtherUserProfileBox } from "../"

import { connect } from "react-redux"
import { getMessages } from "../../actions/getMessages"

import { mainStyle, timelineStyle } from "../HomePage/style"

class OtherUserProfile extends Component {
  constructor() {
    super()

    this.state = { messageNum: 5 }

    window.onscroll = () => {
      let newNum = Math.floor(window.scrollY / 1000 * 5) + 4

      this.setState({ messageNum: newNum })
    }
  }

  componentDidMount() {
    this.props.getMessages()
    window.scrollTo(0, 0)
  }

  render() {
    const { id } = this.props.match.params
    const { messages } = this.props

    const displayedMessages = messages
      .filter(
        message => Number(id) === Number(message.userId)
      )
      .slice(0, this.state.messageNum)

    return (
      <React.Fragment>
        <GeneralHeader />
        <div id="other-profile-wrap" style={mainStyle}>
          <div className="other-profile-mobile wrap">
            <OtherUserProfileBox id={id} className="mobile" />
          </div>
          {
            displayedMessages.length > 0
            &&
            <div className="timeline wrap" style={timelineStyle}>
              <Timeline messages={ displayedMessages } />
            </div>
          }
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps({ messages }) {
  return {
    messages: messages.messages
  }
}

const mapDispatchToProps = {
  getMessages
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OtherUserProfile)
