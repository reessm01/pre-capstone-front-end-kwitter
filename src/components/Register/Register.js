import React, { Component } from "react"
import { connect } from "react-redux"
import { registerThenGoToUserProfile as register } from "../../actions"
import Spinner from "react-spinkit"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { GeneralHeader } from "../"

const cardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  marginTop: "4rem",
  width: '20rem',
  backgroundColor: "#DCDCDC"
}

class Register extends Component {
  state = { username: "", displayName: "", password: "" }

  handleRegister = e => {
    e.preventDefault()
    this.props.register(this.state)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { registerLoading, registerError } = this.props
    return (
      <React.Fragment>
        <GeneralHeader />
        <Card style={cardStyle}>
          <Card.Img variant="top" src="./img/cuteBird.png" />
          <Card.Body>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Card.Title>Kweet, kweet motha...</Card.Title>
            </div>
            <hr />
            <Form onSubmit={this.handleRegister}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label htmlFor="username">nickname</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="username"
                  name="username"
                  autoFocus
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label htmlFor="password">magic word</Form.Label>
                <Form.Control 
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicDisplay">
                <Form.Label htmlFor="displayName">stage name</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="display name"
                  name="displayName"
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button disabled={registerLoading} variant="primary" type="submit" style={{ marginBottom: '2rem' }}>
                fly away
              </Button>
            </Form>
            {registerLoading && <Spinner name="circle" color="blue" />}
            {registerError && <p style={{ color: "red" }}>{registerError}</p>}
            <Link to="/">here to login</Link>
          </Card.Body>
        </Card>
      </React.Fragment>
    )
  }
}

export default connect(
  ({ auth }) => ({
    registerLoading: auth.registerLoading,
    registerError: auth.registerError
  }),
  { register }
)(Register)