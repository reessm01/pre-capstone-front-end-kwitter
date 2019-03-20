import React, { Component } from "react"
import Card from "react-bootstrap/Card"
import {domain, handleJsonResponse} from '../../actions/constants'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { cardTitleStyle, cardTextStyle, cardImgStyle } from "./style"

library.add(faEdit)

const url = domain + "/users/"

class OtherUserProfileBox extends Component {
  state = {
    displayName: '',
    bio: '',
    username: '',
    photoUrl: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmybroadband.co.za%2Fnews%2Fwp-content%2Fuploads%2F2017%2F04%2FTwitter-profile-picture.jpg&f=1'
  }

  componentDidMount(){
    fetch(url + this.props.id)
    .then(handleJsonResponse)
    .then(data => {
      this.setState({
        displayName: data.user.displayName,
        bio: data.user.about,
        username: data.user.username
      })
    })
    .catch(err => {
        console.log(err)
    }) 

    this.fetchUserPhoto()
  }

  fetchUserPhoto() {
    fetch(url + this.props.id + "/picture")
      .then(result => {
        if (result.status === 200) {
          this.setState({
              photoUrl: result.url
          })
        }
      })
  }

  render() {
    const { photoUrl, displayName, bio, username } = this.state

    return (
      <Card className="other-profile-card">
        <Card.Img style={ cardImgStyle } variant="top" src={ photoUrl }/>
        <Card.Body>
            <Card.Title style={ cardTitleStyle }>{ displayName }</Card.Title>
            <small>@{ username }</small>
            <Card.Text style={cardTextStyle}>{ bio }</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default OtherUserProfileBox
