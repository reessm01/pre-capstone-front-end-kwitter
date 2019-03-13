import { domain, jsonHeaders, handleJsonResponse } from "./constants"
import { push } from "connected-react-router"
import { setCurrentUserInfo } from "../actions"

export const LOGIN = "LOGIN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"

const url = domain + "/auth"

const login = loginData => dispatch => {
  dispatch({
    type: LOGIN
  })

  return fetch(url + "/login", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(loginData)
  })
    .then(handleJsonResponse)
    .then(result => {
      console.log(result)
      localStorage.setItem("token", result.token)
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: result
      })
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: LOGIN_FAIL, payload: err.message })
      )
    })
}

export const loginThenGoToUserProfile = loginData => dispatch => {
<<<<<<< HEAD
  return dispatch(login(loginData))
    .then(() => dispatch(push("/home")))
}
=======
  return dispatch(login(loginData)).then(() => dispatch(push("/home")))
}
>>>>>>> d804eeffea5156bb6ed2e606f8c42ceb1cd54807
