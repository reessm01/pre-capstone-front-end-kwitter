import React, { Component } from "react"
import { connect } from "react-redux"
import { loginThenGoToUserProfile as login } from "../actions"
import { Link } from "react-router-dom"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Spinner from "react-spinkit"
import GeneralHeader from "./GeneralHeader"

const cardStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  marginTop: "4rem",
  width: "20rem",
  backgroundColor: "#DCDCDC"
}

class LoginForm extends Component {
  state = { username: "", password: "" }

  handleLogin = e => {
    e.preventDefault()
    this.props.login(this.state)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { isLoading, err } = this.props

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
            <Form onSubmit={this.handleLogin}>
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
              <Button 
                style={{ marginBottom: '2rem' }}
                disabled={isLoading}
                variant="primary"
                type="submit"
              >
                fly away
              </Button>
            </Form>
            {isLoading && <Spinner name="circle" color="blue" />}
            {err && <p style={{ color: "red" }}>{err}</p>}
            <Link to="/register">to register</Link>
          </Card.Body>
        </Card>
      </React.Fragment>
    )
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError
  }),
  { login }
)(LoginForm)
