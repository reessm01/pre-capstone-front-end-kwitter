import { domain, handleJsonResponse } from "./constants"
import { store } from "../index"

export const SET_USER = "SET_USER"

const url = domain + "/users/"
const defaultPic =
'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmybroadband.co.za%2Fnews%2Fwp-content%2Fuploads%2F2017%2F04%2FTwitter-profile-picture.jpg&f=1'

export const setCurrentUserInfo = id => dispatch => {
  const token = store.getState().auth.login.token

  return fetch(url + id, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(handleJsonResponse)
    .then(result => {
      fetch(url + id + "/picture", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        if (res.status === 404) {
          return dispatch({
            type: SET_USER,
            payload: { ...result.user, pic: defaultPic }
          })
        } else {
          return dispatch({
            type: SET_USER,
            payload: { ...result.user, pic: res.url }
          })
        }
      })
    })
    .catch(err => console.log(err))
}
