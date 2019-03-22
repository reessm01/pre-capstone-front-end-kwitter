import { domain, jsonHeaders, handleJsonResponse } from "./constants"
import { store } from "../index"

export const EDIT_USER = "EDIT_USER"
const url = domain + "/users/"

export const editUser = data => dispatch => {
  const token = store.getState().auth.login.token

  return fetch(url, {
    method: "PATCH",
    headers: {
        ...jsonHeaders,
        Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
    .then(handleJsonResponse)
    .then(result => {
        return dispatch({
            type: EDIT_USER,
            payload: result.user
        })
    })
}