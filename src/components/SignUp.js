import React, { Component } from "react";
// import { connect } from "react-redux";
// import { loginThenGoToUserProfile as login } from "../actions";
import Spinner from "react-spinkit";
import { Link } from "react-router-dom";
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

class SignUp extends Component {
  state = { username: "", password: "", email: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
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
              <Form.Group controlId="formBasicPassword">
                <Form.Label htmlFor="email">email</Form.Label>
                <Form.Control 
                  type="email"
                  placeholder="email"
                  name="email"
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button disabled={isLoading} variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
            {isLoading && <Spinner name="circle" color="blue" />}
            {err && <p style={{ color: "red" }}>{err}</p>}
            <Link to="/">Here to Login</Link>
          </Card.Body>
        </Card>
        {isLoading && <Spinner name="circle" color="blue" />}
        {err && <p style={{ color: "red" }}>{err}</p>}
      </React.Fragment>
    );
  }
}
export default SignUp
// export default connect(
// )(SignUp);
