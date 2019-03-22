import { domain } from "./constants"
import { store } from "../index"

export const EDIT_PICTURE = "EDIT_PICTURE"
const url = domain + "/users/picture"
const defaultPic =
'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmybroadband.co.za%2Fnews%2Fwp-content%2Fuploads%2F2017%2F04%2FTwitter-profile-picture.jpg&f=1'

export const editPicture = file => dispatch => {
  const token = store.getState().auth.login.token
  const id = store.getState().auth.login.id

  return fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: file
  })
    .then(() => {
      const url2 = domain + "/users/"
      fetch(url2 + id + "/picture", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        if (res.status === 404) {
          return dispatch({
            type: EDIT_PICTURE,
            payload: { pic: defaultPic }
          })
        } else {
          return dispatch({
            type: EDIT_PICTURE,
            payload: { pic: res.url }
          })
        }
      })
    })
    .catch(err => console.log(err))
}
