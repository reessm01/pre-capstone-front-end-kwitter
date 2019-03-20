import {domain, handleJsonResponse} from './constants'

export const MESSAGES_SUCCEEDED = 'MESSAGES_SUCCEEDED'
export const MESSAGES_FAILED = 'MESSAGES_FAILED'

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

