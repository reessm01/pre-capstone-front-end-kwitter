import {domain, handleJsonResponse} from './constants'

export const MESSAGES_SUCCEEDED = 'MESSAGES_SUCCEEDED'
export const MESSAGES_FAILED = 'MESSAGES_FAILED'
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE'

export const getMessages = (num) => dispatch => {
    return fetch(`${domain}/messages?limit=${num}`)
    .then(handleJsonResponse)
    .then(data => {
       return dispatch({
           type: MESSAGES_SUCCEEDED,
           payload: data
       })
    }).catch(err => {
        return Promise.reject(
            dispatch({type: MESSAGES_FAILED, payload: err.failed})
        )
    })
  }

export const getMessageById = (messageID) => dispatch => {
    return fetch(`${domain}/messages/${messageID}`)
    .then(handleJsonResponse)
    .then(data => {
        dispatch({
            type: UPDATE_MESSAGE,
            payload: data.message
        })
    })
}

