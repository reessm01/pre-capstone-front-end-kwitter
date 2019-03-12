import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import { LoginForm, Timeline, Register } from "."
import ProfileBox from "./ProfileBox"

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LoginForm />} />
        <Route exact path="/register" render={() => <Register />} />
        <Route exact path="/timeline" render={() => <Timeline />} />
        <Route exact path="/profileBox" render={() => <ProfileBox />} />
      </Switch>
    );
  }
}

export default App;
