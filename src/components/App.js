import React, { Component } from "react"
import {
  LoginForm,
  HomePage,
  Register,
  UserProfile,
  OtherUserProfile
} from "."
import { Switch, Route } from "react-router-dom"

import { connect } from "react-redux"
import { local } from "../actions"

class App extends Component {
  
  componentDidMount() {
    const token = localStorage.getItem("id")
    
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]))
      const userId = payload.id

      this.props.local({ id: userId, token: token })
    }
  }

  render() {
    const { login } = this.props
    
    return (
      <Switch>
        <Route exact path="/" render={ () => login ? <HomePage /> : <LoginForm /> } />
        <Route exact path="/register" render={ () => <Register /> } />
        <Route exact path="/UserProfile" render={ () => <UserProfile /> } />
        <Route exact path="/OtherUserProfile/:id" component={ OtherUserProfile } />
      </Switch>
    )
  }
}

export default connect(
  ({ auth }) => ({
    login: auth.login
  }),
  { local }
)(App)
