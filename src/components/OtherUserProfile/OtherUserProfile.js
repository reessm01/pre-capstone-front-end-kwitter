import React, {Component} from 'react'
import { GeneralHeader, Timeline} from '../'
import OtherUserProfileBox from '../OtherUserProfileBox/OtherUserProfileBox'
import {getMessages} from '../../actions/getMessages'
import {connect} from 'react-redux'

 class OtherUserProfile extends Component {

    componentDidMount() {
        this.props.getMessages()
      }

    render() {
        const {id} = this.props.match.params
        
        return (
            <React.Fragment>
                <GeneralHeader />
                <div id="main-wrap">
                    <div className="profile-mobile wrap">
                        <OtherUserProfileBox id={id} className="mobile" />
                    </div>
                    <div className="wrap">
                        <Timeline messages={this.props.messages.filter(message => {
                            console.log(id, message.userId, id === message.userId)
                            
                            return Number(id) === message.userId
                        })}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    
    return {
      messages: state.messages.messages
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
  )(OtherUserProfile)