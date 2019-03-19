import React, {Component} from 'react'
import { UserCard } from '../'
import { getUsers } from '../../actions'
import { connect } from 'react-redux'

export class UsersSidebar extends Component{
    componentDidMount(){
        this.props.getUsers()
    }
    
    render(){
        const { users } = this.props
        
        const userBodies = users.map((user, index) => (
                <UserCard user={user} index={index} />
            )
        )

        return (
            <React.Fragment>
                <div id="show-users">
                    <div style={{ height: 'fit-content' }}>
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

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => {
            dispatch(getUsers())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersSidebar)

