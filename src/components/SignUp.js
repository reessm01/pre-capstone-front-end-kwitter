import React, { Component } from "react";
import { connect } from "react-redux";
import { registerThenGoToUserProfile as register } from "../actions";
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
  state = { username: "", displayName: "", password: "" };

  handleRegister = e => {
    e.preventDefault();
    this.props.register(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <React.Fragment>
<<<<<<< HEAD
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
              <Button disabled={isLoading} variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
            {isLoading && <Spinner name="circle" color="blue" />}
            {err && <p style={{ color: "red" }}>{err}</p>}
            <Link to="/">Here to Login</Link>
          </Card.Body>
        </Card>
=======
        <h1>Sign Up</h1>
        <form onSubmit={this.handleRegister}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            name="displayName"
            required
            onChange={this.handleChange}
          />
          <button type="submit" disabled={isLoading}>
            Submit
          </button>
        </form>
>>>>>>> 2f01ef2644d7e4465ca7e7e546df3342f772ed5b
        {isLoading && <Spinner name="circle" color="blue" />}
        {err && <p style={{ color: "red" }}>{err}</p>}
      </React.Fragment>
    );
  }
}
<<<<<<< HEAD
export default SignUp
// export default connect(
// )(SignUp);
=======
export default connect(
  ({ auth }) => ({
    isLoading: auth.registerLoading,
    err: auth.registerError
  }),
  { register }
)(SignUp);
>>>>>>> 2f01ef2644d7e4465ca7e7e546df3342f772ed5b
