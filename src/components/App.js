import React, { Component } from "react"
import { connect } from "react-redux"
import { Switch, Route } from "react-router-dom"
import { LoginForm, HomePage, Register } from "."

class App extends Component {
  render() {
    const { login } = this.props

    return (
      <Switch>
        <Route exact path="/" render={ () => login ? <HomePage /> : <LoginForm /> } />
        <Route exact path="/register" render={ () => <Register /> } />
      </Switch>
    )
  }
}

export default connect(
  ({ auth }) => ({
    login: auth.login
  })
)(App)
