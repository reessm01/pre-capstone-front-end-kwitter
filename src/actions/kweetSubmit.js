import { domain, jsonHeaders, handleJsonResponse } from "./constants"
import { MESSAGES_FAILED } from "./"
import { store } from "../index"

export const NEW_KWEET = "NEW_KWEET"

const url = domain + "/messages/"

export const handleKweetSubmit = kweetData => dispatch => {

  const token = store.getState().auth.login.token

  return fetch(url, {
    method: "POST",
    headers: {
      ...jsonHeaders,
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(kweetData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
          type: NEW_KWEET,
          payload: result
      })
    })
    .catch(() => {
        return dispatch({
            type: MESSAGES_FAILED
        })
    })
}
