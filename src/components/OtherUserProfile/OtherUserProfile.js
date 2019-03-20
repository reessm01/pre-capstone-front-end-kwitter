import React, {Component} from 'react'
import { GeneralHeader, Timeline} from '../'
import OtherUserProfileBox from '../OtherUserProfileBox/OtherUserProfileBox'
import {getMessages} from '../../actions/getMessages'
import {connect} from 'react-redux'

class OtherUserProfile extends Component {

  componentDidMount() {
    this.props.getMessages()
    window.scrollTo(0,0)
  }

  render() {
    const { id } = this.props.match.params
    const { messages } = this.props
    
    return (
      <React.Fragment>
          <GeneralHeader />
          <div id="other-profile-wrap">
              <div className="other-profile-mobile wrap">
                  <OtherUserProfileBox id={ id } className="mobile" />
              </div>
              <div className="timeline wrap">
                  <Timeline messages={ messages.filter(message => 
                      Number(id) === Number(message.userId)
                  )}/>
              </div>
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