import { domain, jsonHeaders, handleJsonResponse } from "./constants"
import { MESSAGES_FAILED } from "../actions/getMessages"

export const NEW_KWEET = "NEW_KWEET"

const url = domain + "/messages/"

<<<<<<< HEAD
export const handleKweetSubmit = (kweetData) => dispatch => {
    return fetch(url, {
        method: "POST",
        headers: {
            ...jsonHeaders,
            Authorization: `Bearer ${kweetData.token}`
        },
        body: JSON.stringify( kweetData.text ),
    })
        .then(handleJsonResponse)
        .then(result => {
            return dispatch({
                type: NEW_KWEET,
                payload: result
            })
            
        })
}
=======
export const handleKweetSubmit = kweetData => dispatch => {
  return fetch(url, {
    method: "POST",
    headers: {
      ...jsonHeaders,
      Authorization: `Bearer ${kweetData.token}`
    },
    body: JSON.stringify(kweetData.text)
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
>>>>>>> 511a7dc83ec9bc53344ebf77393bd746c926021e
