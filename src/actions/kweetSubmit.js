import { domain, jsonHeaders, handleJsonResponse } from "./constants"

export const NEW_KWEET = "NEW_KWEET"

const url = domain + "/messages/"

export const handleKweetSubmit = (kweetData) => dispatch => {
    return fetch(url, {
        method: "POST",
        headers: jsonHeaders,
        body: JSON.stringify(kweetData)
    })
        .then(handleJsonResponse)
        .then(result => {
            return dispatch({
                type: NEW_KWEET,
                payload: result
            })
            
        })
}