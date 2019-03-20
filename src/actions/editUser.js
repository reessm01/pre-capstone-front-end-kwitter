import { domain, jsonHeaders, handleJsonResponse } from "./constants"

export const EDIT_USER = "EDIT_USER"
const url = domain + "/users/"

export const editUser = data => dispatch => {
  return fetch(url, {
    method: "PATCH",
    headers: {
        ...jsonHeaders,
        Authorization: `Bearer ${data.token}`
    },
    body: JSON.stringify(data.editData)
  })
    .then(handleJsonResponse)
    .then(result => {
        return dispatch({
            type: EDIT_USER,
            payload: result.user
        })
    })
}