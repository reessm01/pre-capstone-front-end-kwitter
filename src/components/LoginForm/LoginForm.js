import React, { Component } from "react"
import { connect } from "react-redux"
import { loginThenGoToUserProfile as login } from "../../actions"
import { Link } from "react-router-dom"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Spinner from "react-spinkit"
import { GeneralHeader } from "../"
import { cardStyle, cardTitleStyle } from "./style"

class LoginForm extends Component {
  state = { username: "", password: "" }

  componentDidMount() {
    window.scrollTo(0,0)
  }

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
        <Card className="wrap" style={ cardStyle }>
          <Card.Img variant="top" src="./img/cuteBird.png" />
          <Card.Body>
            <div style={ cardTitleStyle }>
              <Card.Title>Kweet, kweet...</Card.Title>
            </div>
            <hr />
            <Form onSubmit={this.handleLogin}>
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
            <Link to="/register">register</Link>
          </Card.Body>
        </Card>
      </React.Fragment>
    )
  }
}

function mapStateToProps({ auth }) {
  return {
    isLoading: auth.loginLoading,
    err: auth.loginError
  }
}

const mapDispatchToProps = {
  login
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
