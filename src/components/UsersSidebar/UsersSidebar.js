import React, { Component } from 'react'
import { UserCard } from '../'
import { getUsers } from '../../actions'
import { connect } from 'react-redux'
import { userContainerStyle, botTextStyle, titleTextStyle, userCardStyle } from './style'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export class UsersSidebar extends Component {
    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        const { users } = this.props

        const userCards = users.map((user, index) => 
            <UserCard 
                key={index}
                user={user}
                index={index}
                style={userCardStyle}
            />
        )

        return (
            <React.Fragment>
                <div style={titleTextStyle}>Who To Follow</div>
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
                        <div style={{ marginTop: "0px" }}>
                            {userCards}
                        </div>
                    </ReactCSSTransitionGroup>
                </div>
                <div style={botTextStyle}>Scroll mouse wheel to see more...</div>
            </React.Fragment>
        )
    }
}

function mapStateToProps({ users }) {
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

