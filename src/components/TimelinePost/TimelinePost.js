import React, { Component } from "react"
import Card from "react-bootstrap/Card"
import { domain, handleJsonResponse } from "../../actions/constants"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import {
  cardStyle,
  postHeaderStyle,
  cardImgStyle,
  cardTextStyle,
  namesDivStyle
} from "./style"

library.add(faHeart)

const url = domain + "/users/"

export default class TimelinePost extends Component {
  state = {
    displayName: "",
    username: "",
    photoUrl:
      "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmybroadband.co.za%2Fnews%2Fwp-content%2Fuploads%2F2017%2F04%2FTwitter-profile-picture.jpg&f=1"
  }

  fetchUserInfo() {
    fetch(url + this.props.id)
      .then(handleJsonResponse)
      .then(result => {
        this.setState({
          displayName: result.user.displayName,
          username: result.user.displayName
        })
      })

    fetch(url + this.props.id + "/picture").then(result => {
      if (result.status === 200) {
        this.setState({
          photoUrl: result.url
        })
      }
    })
  }

  componentDidMount() {
    this.fetchUserInfo()
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.fetchUserInfo()
    }
  }

  render() {
    const { displayName, username, photoUrl } = this.state

    const { text } = this.props

    return (
      <Card style={cardStyle}>
        <Card.Body>
          <div style={postHeaderStyle}>
            <Card.Img style={cardImgStyle} src={photoUrl} />
            <div style={namesDivStyle}>
              <Card.Title>{displayName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                @{username}
              </Card.Subtitle>
            </div>
          </div>
          <Card.Text style={cardTextStyle}>{text}</Card.Text>
          <Card.Link style={{ marginLeft: "0.75rem" }} href="#">
            <FontAwesomeIcon icon="heart" />
          </Card.Link>
          <Card.Link href="#">Dislike</Card.Link>
        </Card.Body>
      </Card>
    )
  }
}
