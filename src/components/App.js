import React, { Component } from "react"
import { connect } from "react-redux"
import { Switch, Route } from "react-router-dom"
import { LoginForm, HomePage, Register } from "."
<<<<<<< HEAD
import  UserProfile  from "./UserProfile/UserProfile";
=======
import { local, setCurrentUserInfo } from "../actions"
>>>>>>> a4c64bacf1c94f30ff408a3ac68dd1417b2d8f00

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
        <Route exact path='/userProfile' render={() => <UserProfile /> } />
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
