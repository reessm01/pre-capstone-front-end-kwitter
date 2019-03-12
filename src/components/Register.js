import React, { Component } from "react"
import { connect } from "react-redux"
import { registerUpThenGoToUserProfile as register } from "../actions"
import Spinner from "react-spinkit"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const cardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  width: '20rem'
}

class Register extends Component {
  state = { username: "", displayName: "", password: "" }

  handleRegister = e => {
    e.preventDefault()
    this.props.register(this.state)
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  render() {
    const { isLoading, err } = this.props
    return (
      <React.Fragment>
        <Card style={cardStyle}>
          <Card.Img variant="top" src="./img/kenzieLogo.png" />
          <Card.Body>
            <Card.Title>Welcome to Kwitter</Card.Title>
            <hr />
            <Form onSubmit={this.handleLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label htmlFor="username">Username</Form.Label>
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
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control 
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicDisplay">
                <Form.Label htmlFor="displayName">Display Name</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="display name"
                  name="displayName"
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button disabled={isLoading} variant="primary" type="submit">
                Register
              </Button>
            </Form>
            {isLoading && <Spinner name="circle" color="blue" />}
            {err && <p style={{ color: "red" }}>{err}</p>}
            <Link to="/">Here to Login</Link>
          </Card.Body>
        </Card>
        { isLoading && <Spinner name="circle" color="blue" /> }
        { err && <p style={{ color: "red" }}>{ err }</p> }
      </React.Fragment>
    )
  }
}
export default connect(
  ({ auth }) => ({
    isLoading: auth.registerLoading,
    err: auth.registerError
  }),
  { register }
)(Register)
