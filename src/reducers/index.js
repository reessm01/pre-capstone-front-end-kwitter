import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import auth from "./auth"
import likes from "./likes"
import messages from "./messages"
import users from "./users"
import register from "./register"
import user from "./user"

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    likes,
    messages,
    users,
    register,
    user
  });
