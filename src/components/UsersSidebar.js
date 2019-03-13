import React, {Component} from 'react'
import {getUsers} from '../actions/getUsers'
import {connect} from 'react-redux'


export class UsersSidebar extends Component{
    componentDidMount(){
        this.props.getUsers()
    }

    render(){
        return (
            <React.Fragment>
                
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

