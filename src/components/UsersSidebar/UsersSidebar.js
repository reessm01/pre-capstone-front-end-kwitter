import React, {Component} from 'react'
import { UserCard } from '../'
import { getUsers } from '../../actions'
import { connect } from 'react-redux'
import {userContainerStyle } from './style'

export class UsersSidebar extends Component{
    componentDidMount(){
        this.props.getUsers()
    }
    
    render(){
        const { users } = this.props
        
        const userBodies = users.map((user, index) => (
                <UserCard user={user} index={index} style={{marginTop:"0px"}}/>
            )
        )

        return (
            <React.Fragment>
                <div id="show-users" style={userContainerStyle}>
                    <div style={{marginTop:"0px"}}>
                        {userBodies}
                    </div>
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

