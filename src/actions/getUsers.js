import {domain, handleJsonResponse} from './constants'

export const USERS_OBTAINED = 'USERS_OBTAINED'

export const getUsers = () => dispatch => {
    return fetch(`${domain}/users`)
    .then(handleJsonResponse)
    .then(data => {
        return dispatch({
            type: USERS_OBTAINED,
            payload: data
        })
    })
    .catch(err => {
        console.log(err)
    })
}