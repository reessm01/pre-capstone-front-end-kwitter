import { domain, jsonHeaders, handleJsonResponse } from "./constants"
import { push } from "connected-react-router"

export const SIGNUP = "SIGNUP"
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"
export const SIGNUP_FAIL = "SIGNUP_FAIL"

const url = domain + "/auth"

const signUp = signUpData => dispatch => {
  dispatch({
    type: SIGNUP
  })

  return fetch(url + "/signup", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(signUpData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: SIGNUP_SUCCESS,
        payload: result
      })
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: SIGNUP_FAIL, payload: err.message })
      )
    })
}

export const signUpThenGoToUserProfile = signUpData => dispatch => {
  return dispatch(signUp(signUpData)).then(() => dispatch(push("/profile")))
}