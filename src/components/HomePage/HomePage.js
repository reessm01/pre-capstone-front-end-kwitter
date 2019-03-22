import React, { Component } from 'react'
import {
  GeneralHeader,
  ProfileBox,
  Timeline,
  UsersSidebar,
  KweetInput
} from '../'

import {connect} from 'react-redux'
import { getMessages } from '../../actions/'

import { 
  mainStyle,
  timelineStyle,
  userSideStyle
} from './style'

class HomePage extends Component {
  constructor() {
    super()

    this._isMounted = false
    this.state = { messageNum: 5 }

    window.onscroll = () => {
      const newNum = Math.floor(window.scrollY / 1000 * 5) + 4

      this._isMounted && this.setState({ messageNum: newNum })
    }
  }

  componentWillUnmount(){
    this._isMounted = false
  }
  
  componentDidMount() {
    this._isMounted = true
    window.scrollTo(0,0)
    this.props.getMessages()
  }

  render() {
    const { messages } = this.props
    const { messageNum } = this.state

    return (
        <React.Fragment>
            <GeneralHeader />
            <div id="main-wrap" style={ mainStyle }>
                <div className="profile-mobile wrap">
                    <ProfileBox className="mobile" />
                </div>
                <div style={ timelineStyle } className="wrap">
                    <KweetInput />
                    <Timeline messages={ messages.slice(0, messageNum) }/>
                </div>
                <div className="users-mobile wrap" style={ userSideStyle }>
                    <UsersSidebar className="mobile" />
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
)(HomePage)



