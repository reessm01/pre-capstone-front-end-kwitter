import React, { Component } from "react"
import { connect } from "react-redux"
import { Switch, Route } from "react-router-dom"
import { LoginForm, HomePage, Register } from "."

class App extends Component {
  render() {
    const loggedIn = localStorage.getItem("token")

    return (
      <Switch>
        <Route exact path="/" render={() => loggedIn ? <HomePage /> : <LoginForm />} />
        <Route exact path="/register" render={() => <Register />} />
      </Switch>
    )
  }
}

export default connect(
  ({ auth }) => ({
    loggedIn: auth.login
  })
)(App)
