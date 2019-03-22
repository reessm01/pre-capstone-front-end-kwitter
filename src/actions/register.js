import { domain, jsonHeaders, handleJsonResponse } from "./constants"
import { loginThenGoToUserProfile as login } from "../actions"

export const REGISTER = "REGISTER"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAIL = "REGISTER_FAIL"

const url = domain + "/auth"

const register = registerData => dispatch => {
  dispatch({
    type: REGISTER
  })
  return fetch(url + "/register", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(registerData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: REGISTER_SUCCESS,
        payload: result
      })
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: REGISTER_FAIL, payload: err.message })
      )
    })
}

export const registerThenGoToUserProfile = registerData => dispatch => {
  return dispatch(register(registerData))
    .then(() => dispatch(login(registerData)))
}