import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginForm, UserProfile, SignUp } from ".";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LoginForm />} />
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/profile" render={() => <UserProfile />} />
      </Switch>
    );
  }
}

export default App;
