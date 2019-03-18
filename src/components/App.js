import React, { Component } from "react"
import { connect } from "react-redux"
import { Switch, Route } from "react-router-dom"
import { LoginForm, HomePage, Register } from "."
import { local, setCurrentUserInfo } from "../actions"

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("id")
    const payload = JSON.parse(atob(token.split('.')[1]))
    const userId = payload.id

    this.props.local({ id: userId, token: token })
  }

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
  ({ auth, currentUser }) => ({
    login: auth.login,
    displayName: currentUser.displayName,
    username: currentUser.username,
  }),
  { local, setCurrentUserInfo }
)(App)
