import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import { userCard, cardImgStyle, namesDivStyle } from './style'
import { domain } from "../../actions/constants"
import { Link } from "react-router-dom"

const url = domain + "/users/"

export class UserCard extends Component{
    state = {
        photoUrl: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmybroadband.co.za%2Fnews%2Fwp-content%2Fuploads%2F2017%2F04%2FTwitter-profile-picture.jpg&f=1'
    }

    fetchUserPhoto() {
        fetch(url + this.props.user.id + "/picture")
            .then(result => {
                if (result.status === 200) {
                    this.setState({
                        photoUrl: result.url
                    })
                }
            })
    }

    componentDidMount() {
        this.fetchUserPhoto()
    }
    
    render(){
        const { user, index } = this.props
        const { photoUrl } = this.state
        const profileLink = `/OtherUserProfile/${this.props.user.id}`
        
        return (
            <Link to={ profileLink }>
                <Card key={ index } style={ userCard }>
                    <Card.Img 
                        style={ cardImgStyle }
                        src={ photoUrl }
                    ></Card.Img>
                    <div style={ namesDivStyle }>
                        <Card.Title>{ user.displayName }</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">@{ user.username }</Card.Subtitle>
                    </div>
                </Card>
            </Link>
        )
    }
}

export default UserCard