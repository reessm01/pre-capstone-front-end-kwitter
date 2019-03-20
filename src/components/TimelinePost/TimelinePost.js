import React, { Component } from "react"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"
import { domain, handleJsonResponse } from "../../actions/constants"
import { addLike } from "../../actions/"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
<<<<<<< HEAD
import{toggleLike} from '../../actions/likes'
import {connect} from 'react-redux'
=======
import { connect } from 'react-redux'
>>>>>>> d0b74e9353968bc1854ea2be87508a0677a846ce
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

<<<<<<< HEAD
    const { text, likes, messageID, toggleLike } = this.props
    console.log(this.props)
=======
    const { text, messageID, addLike, likes } = this.props

>>>>>>> d0b74e9353968bc1854ea2be87508a0677a846ce
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
<<<<<<< HEAD
          <Card.Link onClick={() => toggleLike(messageID)} style={{ marginLeft: "0.75rem" }} href="#">
            <FontAwesomeIcon icon="heart" style={heartStyle}/> {likes.length} Like(s)
          </Card.Link>
=======
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Card.Text onClick={() => addLike(messageID)} style={{ margin: "0 0.75rem 0 2rem" }}>
              <FontAwesomeIcon icon="heart" style={heartStyle}/>
            </Card.Text>
            <Card.Subtitle className="text-muted">
              { likes.length ? likes.length : '' }
            </Card.Subtitle>
          </div>
>>>>>>> d0b74e9353968bc1854ea2be87508a0677a846ce
        </Card.Body>
      </Card>
    )
  }
}

const mapStateToProps = null

<<<<<<< HEAD
const mapDispatchToProps = dispatch => {
  return {
    toggleLike: (messageID) => {dispatch(toggleLike(messageID))}
  }
=======
const mapDispatchToProps = {
  addLike
>>>>>>> d0b74e9353968bc1854ea2be87508a0677a846ce
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelinePost)
