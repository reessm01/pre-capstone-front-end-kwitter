import { domain, jsonHeaders, handleJsonResponse } from "./constants"
import { store } from "../index"

export const EDIT_USER = "ADD_LIKE"
const url = domain + "/likes/"

export const addLike = messageId => dispatch => {

    const token = store.getState().auth.login.token

    return fetch(url, {
        method: "POST",
        headers: {
            ...jsonHeaders,
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ messageId: messageId })
    })
        .then(handleJsonResponse)
        .then(result => {
            console.log(result)
        })
}