import React, {Component} from 'react'
import { UserCard } from '../'
import { getUsers } from '../../actions'
import { connect } from 'react-redux'
import {userContainerStyle } from './style'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export class UsersSidebar extends Component{
    componentDidMount(){
        this.props.getUsers()
    }
    
    render(){
        const { users } = this.props
        
        const userCards = users.map((user, index) => (
                <UserCard user={user} index={index} style={{marginTop:"0px"}}/>
            )
        )

        return (
            <React.Fragment>
                <div id="show-users" style={userContainerStyle}>
                    <ReactCSSTransitionGroup
                        transitionName="fade"
                        transitionEnter={true}
                        transitionEnterTimeout={2000}
                        transitionLeave={true}
                        transitionLeaveTimeout={300}
                        transitionAppear={false}
                        transitionAppearTimeout={2000}
                    >
                        <div style={{marginTop:"0px"}}>
                                { userCards }
                        </div>
                    </ReactCSSTransitionGroup>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps({ users }){
    return {
       users: users.usersArray
    }
}

const mapDispatchToProps = {
    getUsers
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersSidebar)

