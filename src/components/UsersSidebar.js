import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import {getUsers} from '../actions/getUsers'
import {connect} from 'react-redux'


export class UsersSidebar extends Component{
    componentDidMount(){
       this.props.getUsers()
        
    }
    

    render(){
        const user = this.props.users.users.map(user => (
            <Card.Body>{user.displayName}</Card.Body>
          ))
        return (
            <React.Fragment>
                <Card>
                    {user}
                </Card>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    return {
       users: state.users
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

