import { domain, handleJsonResponse } from "./constants"
import { push } from "connected-react-router"

export const LOGOUT = "LOGOUT"
export const LOGOUT_FAIL = "LOGOUT_FAIL"

const url = domain + "/auth"

const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  })

  return fetch(url + "/logout")
    .then(handleJsonResponse)
    .then(result => {
      localStorage.removeItem("id")
      return dispatch({
        type: LOGOUT,
        payload: result
      })
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: LOGOUT_FAIL, payload: err.message })
      )
    })
}

export const logoutThenGoToLoginPage = loginData => dispatch => {
    return dispatch(logout(loginData)).then(() => dispatch(push("/")))
}