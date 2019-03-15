import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import {getUsers} from '../actions/getUsers'
import {connect} from 'react-redux'

const cardStyle = {
    width: '18rem',
    padding: '2rem',
    backgroundColor: "#DCDCDC"
}

export class UsersSidebar extends Component{
    componentDidMount(){
       this.props.getUsers()
        
    }
    
    render(){
        const { users } = this.props

        const userBodies = users.map(user => (
            <Card.Body>{user.displayName}</Card.Body>
        ))

        return (
            <React.Fragment>
                <Card id="show-users" style={cardStyle}>
                    {userBodies}
                </Card>
            </React.Fragment>
        )
    }
}

function mapStateToProps({ users }){
    return {
       users: users.users
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

