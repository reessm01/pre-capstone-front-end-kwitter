import React, { Component } from "react";
// import { connect } from "react-redux";
// import { loginThenGoToUserProfile as login } from "../actions";
import Spinner from "react-spinkit";

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
        <h1>Sign Up</h1>
        <form onSubmit={this.handleLogin}>
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={this.handleChange}
          />
          <button type="submit" disabled={isLoading}>
            Submit
          </button>
        </form>
        {isLoading && <Spinner name="circle" color="blue" />}
        {err && <p style={{ color: "red" }}>{err}</p>}
      </React.Fragment>
    );
  }
}
export default SignUp
// export default connect(
// )(SignUp);
