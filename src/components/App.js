import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import { LoginForm, UserProfile, SignUp } from "./";
=======
import { LoginForm, UserProfile, SignUp } from ".";
>>>>>>> 2f01ef2644d7e4465ca7e7e546df3342f772ed5b

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
