import React, {Component} from 'react'
import { GeneralHeader, ProfileBox, Timeline, UsersSidebar} from '../'
import { getMessages } from '../../actions/getMessages'
import {connect} from 'react-redux'
import { timelineStyle, mainStyle } from './style'

class UserProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messageNum: 10
    }

    window.onscroll = () => {
      let newNum = Math.floor(window.scrollY / 1000 * 5) + 4

      this.setState({
        messageNum: newNum
      })
    }
  }

  componentDidMount() {
    this.props.getMessages()
    window.scrollTo(0,0)
  }

  render() {
    const { messages, currentUserId } = this.props

    const displayedMessages = messages
      .filter(
        message => Number(currentUserId) === Number(message.userId)
      )
      .slice(0, this.state.messageNum)

    return (
      <React.Fragment>
        <GeneralHeader />
        <div id="main-wrap" style={ mainStyle }>
          <div className="profile-mobile wrap">
            <ProfileBox className="mobile" />
          </div>
          <div style={ timelineStyle } className="wrap">
            <Timeline messages={ displayedMessages }/>
          </div>
          <div className="users-mobile wrap">
            <UsersSidebar className="mobile" />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps({ messages, currentUser }) {
  return {
    messages: messages.messages,
    currentUserId: currentUser.id
  }
}

const mapDispatchToProps = {
  getMessages
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile)