import { domain } from "./constants"
import { store } from "../index"

export const EDIT_PICTURE = "EDIT_PICTURE"
const url = domain + "/users/picture"
const defaultPic =
  "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1569824813%2Fnerd_400x400.jpg&f=1"

export const editPicture = data => dispatch => {

  const token = store.getState().auth.login.token

  return fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: data.file
  })
    .then(() => {
      let url2 = domain + "/users/"
      fetch(url2 + data.id + "/picture", {
        headers: {
          Authorization: `Bearer ${data.token}`
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
    .catch(er => console.log(er))
}
