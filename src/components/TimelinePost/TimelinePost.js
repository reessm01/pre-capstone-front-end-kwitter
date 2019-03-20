import React, { Component } from "react"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"
import { domain, handleJsonResponse } from "../../actions/constants"
import { addLike } from "../../actions/"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import {connect} from 'react-redux'
import {
  cardStyle,
  postHeaderStyle,
  cardImgStyle,
  cardTextStyle,
  namesDivStyle,
  heartStyle
} from "./style"

library.add(faHeart)

const url = domain + "/users/"

class TimelinePost extends Component {
  state = {
    displayName: "",
    username: "",
    photoUrl:
      "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmybroadband.co.za%2Fnews%2Fwp-content%2Fuploads%2F2017%2F04%2FTwitter-profile-picture.jpg&f=1",
    likes: []
  }

  fetchUserInfo() {
    fetch(url + this.props.id)
      .then(handleJsonResponse)
      .then(result => {
        this.setState({
          displayName: result.user.displayName,
          username: result.user.username
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

    const { text, likes, messageID, addLike } = this.props

    const profileLink = `/OtherUserProfile/${this.props.id}`

    return (
      <Card style={cardStyle}>
        <Card.Body>
          <Link to={ profileLink }>
            <div style={postHeaderStyle}>
              <Card.Img style={cardImgStyle} src={photoUrl} />
              <div style={namesDivStyle}>
                <Card.Title>{displayName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  @{username}
                </Card.Subtitle>
              </div>
            </div>
          </Link>
          <Card.Text style={cardTextStyle}>{text}</Card.Text>
          <Card.Link onClick={() => addLike(messageID)} style={{ marginLeft: "0.75rem" }} href="#">
            <FontAwesomeIcon icon="heart" style={heartStyle}/>
          </Card.Link>
        </Card.Body>
      </Card>
    )
  }
}

const mapStateToProps = null

const mapDispatchToProps = {
  addLike
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelinePost)
