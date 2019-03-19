import React, { Component } from "react"
import { connect } from "react-redux"
import { Switch, Route } from "react-router-dom"
import { LoginForm, HomePage, Register } from "."
import  UserProfile  from "./UserProfile/UserProfile";

class App extends Component {
  render() {
    const { login } = this.props

    return (
      <Switch>
        <Route exact path="/" render={ () => login ? <HomePage /> : <LoginForm /> } />
        <Route exact path="/register" render={ () => <Register /> } />
        <Route exact path='/userProfile' render={() => <UserProfile /> } />
      </Switch>
    )
  }
}

export default connect(
  ({ auth }) => ({
    login: auth.login
  })
)(App)
