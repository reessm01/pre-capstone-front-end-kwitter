import { domain } from "./constants"

export const EDIT_PICTURE = "EDIT_PICTURE"
const url = domain + "/users/picture"

export const editPicture = data => dispatch => {
  return fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${data.token}`
    },
    body: data.file
  })
    .then(result => {
      console.log(result)
      return dispatch({
        type: EDIT_PICTURE,
        payload: data.file,
        res: result
      })
    })
    .catch(er => console.log(er))
}
