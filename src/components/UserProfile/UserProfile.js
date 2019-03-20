import React, {Component} from 'react'
import { GeneralHeader, ProfileBox, Timeline, UsersSidebar} from '../'
import {getMessages} from '../../actions/getMessages'
import {connect} from 'react-redux'
import { timelineStyle, mainStyle } from './style'

 class UserProfile extends Component {

  componentDidMount() {
    this.props.getMessages()
    window.scrollTo(0,0)
  }

  render() {
    return (
      <React.Fragment>
        <GeneralHeader />
        <div id="main-wrap" style={ mainStyle }>
          <div className="profile-mobile wrap">
            <ProfileBox className="mobile" />
          </div>
          <div style={ timelineStyle } className="wrap">
            <Timeline messages={this.props.messages.filter(message => {
                return this.props.currentUserId === message.userId
            })}/>
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