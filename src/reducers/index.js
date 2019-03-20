import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import auth from "./auth"
import messages from "./messages"
import users from "./users"
import register from "./register"
import currentUser from "./currentUser"

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    messages,
    users,
    register,
    currentUser
  });
