import React, { Component } from "react"
import { connect } from "react-redux"
import Card from "react-bootstrap/Card"
import {Link} from 'react-router-dom'
import {domain, handleJsonResponse} from '../../actions/constants'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { setCurrentUserInfo, editUser, editPicture } from "../../actions"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { cardStyle, cardTitleStyle, cardTextStyle } from "./style"

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
    console.log(this.state)

    return (
      <Card style={cardStyle}>
        <Card.Img variant="top" src={this.state.photoUrl}/>
        <Card.Body>
            <Card.Title style={cardTitleStyle}>{this.state.displayName}</Card.Title>
            <small>@{this.state.username}</small>
            <Card.Text style={cardTextStyle}>{this.state.bio}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default OtherUserProfileBox
