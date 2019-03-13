import { domain, handleJsonResponse } from "./constants"

export const SET_USER = "SET_USER"

const url = domain + "/users/"

export const setCurrentUserInfo = id => dispatch => {
    return fetch(url + id)
        .then(handleJsonResponse)
        .then(result => {
            return dispatch({
                type: SET_USER,
                payload: result.user
            })
        })
}