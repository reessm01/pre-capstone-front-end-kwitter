import React, {Component} from 'react'
import { GeneralHeader, ProfileBox, Timeline, UsersSidebar} from '../'
import {getMessages} from '../../actions/getMessages'
import {connect} from 'react-redux'

 class UserProfile extends Component {

    componentDidMount() {
        this.props.getMessages()
    }

    render() {
        console.log(this.props)

        return (
            <React.Fragment>
                <GeneralHeader />
                <div id="main-wrap">
                    <div className="profile-mobile wrap">
                        <ProfileBox className="mobile" />
                    </div>
                    <div className="timeline wrap">
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

function mapStateToProps(state) {
    console.log(state)
    return {
      messages: state.messages.messages,
      currentUserId: state.currentUser.id
    }
  }

const mapDispatchToProps = dispatch => {
    return {
      getMessages: () => {
        dispatch(getMessages())
      }
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserProfile)