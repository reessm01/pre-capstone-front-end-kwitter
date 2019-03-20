import { domain, jsonHeaders, handleJsonResponse } from "./constants"
import { store } from "../index"

export const LIKED = "ADD_LIKE"
const url = domain + "/likes/"

export const addLike = messageId => dispatch => {

    const token = store.getState().auth.login.token

    return fetch(url, {
        method: "POST",
        headers: {
            ...jsonHeaders,
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ messageId })
    })
        .then(handleJsonResponse)
        .then(result => {
            dispatch({
                type: LIKED,
                payload: result
            })
        })
}