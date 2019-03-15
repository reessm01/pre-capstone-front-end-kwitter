import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import {getUsers} from '../../actions'
import {connect} from 'react-redux'

const userCard = {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '1rem',
    marginBottom: '1rem',
    padding: '1rem',
    paddingTop: '1.5rem',
    paddingLeft: '1.5rem',
    backgroundColor: "white",
    borderRadius: '5px'
}

const cardImgStyle = { 
    height: '3rem',
    width: '3rem',
    marginRight: '1rem'
}

const namesDivStyle = {
    display: 'flex',
    flexDirection: 'column'
}

export class UsersSidebar extends Component{
    componentDidMount(){
       this.props.getUsers()
        
    }
    
    render(){
        const { users } = this.props
        
        const userBodies = users.map(user => (
            <Card style={userCard }>
                <Card.Img style={ cardImgStyle } src={ 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmybroadband.co.za%2Fnews%2Fwp-content%2Fuploads%2F2017%2F04%2FTwitter-profile-picture.jpg&f=1' }></Card.Img>
                <div style={ namesDivStyle }>
                    <Card.Title>{ user.displayName }</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">@{ user.username }</Card.Subtitle>
                </div>
            </Card>
        ))

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

