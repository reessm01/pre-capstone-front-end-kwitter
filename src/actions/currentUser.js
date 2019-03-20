import { domain, handleJsonResponse } from "./constants"
import { store } from "../index"

export const SET_USER = "SET_USER"

const url = domain + "/users/"
const defaultPic =
  "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1569824813%2Fnerd_400x400.jpg&f=1"

export const setCurrentUserInfo = data => dispatch => {

  const token = store.getState().auth.login.token

  return fetch(url + data.id, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(handleJsonResponse)
    .then(result => {
      fetch(url + data.id + "/picture", {
        headers: {
          Authorization: `Bearer ${data.token}`
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
