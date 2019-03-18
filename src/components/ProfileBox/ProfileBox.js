import React, { Component } from "react"
import { connect } from "react-redux"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { setCurrentUserInfo, editUser } from "../../actions"
import { editPicture } from "../../actions/editPicture"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { cardStyle, cardTitleStyle, cardTextStyle } from "./style"

library.add(faEdit)

class ProfileBox extends Component {
  state = {
    edit: false,
    selectedFile: null
  }

  componentDidMount() {
    this.props.setCurrentUserInfo({
      id: this.props.id,
      token: this.props.token
    })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleEdit = e => {
    const { displayName, about, edit } = this.state

    this.setState({ edit: !edit })

    e.preventDefault()
    this.props.editUser({
      editData: { displayName, about },
      token: this.props.token
    })
  }

  handleUpload = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    this.props.editPicture({ file: formData, token: this.props.token })
  }

  render() {
    const { handleChange, handleEdit, handleUpload } = this
    const { displayName, username, bio, pic } = this.props
    const { edit } = this.state

    return (
      <Card style={cardStyle}>
        <Card.Img variant="top" src={pic} />
        {edit ? (
          <Form onSubmit={handleUpload} style={{ marginTop: "30px" }}>
            <Form.Group controlId="displayName">
              <Form.Label>Display Name</Form.Label>
              <Form.Control
                type="text"
                name="displayName"
                placeholder={displayName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="bio">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                name="about"
                maxlength="100"
                as="textarea"
                rows="3"
                placeholder={bio}
                onChange={handleChange}
              />
            </Form.Group>
            <input type="file" name="picture" id="picture" />
            <Button
              type="submit"
              value="Submit"
              style={{ marginBottom: "30px" }}
            >
              Save
            </Button>
          </Form>
        ) : (
          <Card.Body>
            <Card.Title style={cardTitleStyle}>{displayName}</Card.Title>
            <small>@{username}</small>
            <Card.Text style={cardTextStyle}>{bio}</Card.Text>
            <Button onClick={() => this.setState({ edit: !edit })}>
              <FontAwesomeIcon icon="edit" />
            </Button>
          </Card.Body>
        )}
      </Card>
    )
  }
}

export default connect(
  ({ auth, currentUser }) => ({
    id: auth.login.id,
    token: auth.login.token,
    displayName: currentUser.displayName,
    username: currentUser.username,
    bio: currentUser.bio,
    pic: currentUser.pic
  }),
  { setCurrentUserInfo, editUser, editPicture }
)(ProfileBox)
