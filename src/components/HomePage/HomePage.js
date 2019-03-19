import React, { Component } from 'react'
import { ProfileBox, Timeline, UsersSidebar, GeneralHeader, KweetInput } from '../'

import {getMessages} from '../../actions/getMessages'
import {connect} from 'react-redux'

import { timelineStyle, mainStyle } from './style'

class HomePage extends Component {

    componentDidMount() {
        this.props.getMessages()
      }

    render() {
        return (
            <React.Fragment>
                <GeneralHeader />
                <div id="main-wrap" style={mainStyle}>
                    <div className="profile-mobile wrap" style={{borderWidth:"0px"}}>
                        <ProfileBox className="mobile" />
                    </div>
                    <div style={timelineStyle} className="wrap">
                        <KweetInput />
                        <Timeline messages={this.props.messages}/>
                    </div>
                    <div className="users-mobile wrap" style={{borderWidth:"0px"}}>
                        <UsersSidebar className="mobile" />
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
  )(HomePage)



