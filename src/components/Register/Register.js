import React, { Component } from "react"
import { connect } from "react-redux"
import { registerThenGoToUserProfile as register } from "../../actions"
import Spinner from "react-spinkit"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { GeneralHeader } from "../"
import { cardStyle, titleStyle } from "./style" 
import { buttonStyle } from "../LoginForm/style";

class Register extends Component {
  state = { username: "", displayName: "", password: "" }

  componentDidMount() {
    window.scrollTo(0,0)
  }

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
        <Card lassName="wrap" style={cardStyle}>
          <Card.Img variant="top" src="./img/cuteBird.png" />
          <Card.Body>
            <div style={ titleStyle }>
              <Card.Title>Kweet, kweet...</Card.Title>
            </div>
            <hr />
            <Form onSubmit={this.handleRegister}>
              <Form.Group controlId="username">
                <Form.Label>nickname</Form.Label>
                <Form.Control
                  type="text" 
                  placeholder="username"
                  name="username"
                  autoFocus
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>magic word</Form.Label>
                <Form.Control 
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="displayName">
                <Form.Label>stage name</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="display name"
                  name="displayName"
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <div style={ titleStyle }>
                <Button disabled={registerLoading} variant="primary" type="submit" style={buttonStyle}>
                  fly away
                </Button>
                <Link to="/">login</Link>
              </div>
            </Form>
            {registerLoading && <Spinner name="circle" color="blue" />}
            {registerError && <p style={{ color: "red" }}>{registerError}</p>}
          </Card.Body>
        </Card>
      </React.Fragment>
    )
  }
}

function mapStateToProps({ auth }) {
  return {
    registerLoading: auth.registerLoading,
    registerError: auth.registerError
  }
}

const mapDispatchToProps = {
  register
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)