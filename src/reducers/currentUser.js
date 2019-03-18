import { SET_USER, EDIT_USER } from "../actions"
import { EDIT_PICTURE } from "../actions/editPicture"

const initialState = {
  id: null,
  pic: null,
  displayName: "",
  bio: "",
  username: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        id: action.payload.id,
        displayName: action.payload.displayName,
        bio: action.payload.about,
        username: action.payload.username,
        pic: action.payload.pic
      }
    case EDIT_USER:
      return {
        ...state,
        id: action.payload.id,
        displayName: action.payload.displayName,
        bio: action.payload.about,
        username: action.payload.username
      }
    case EDIT_PICTURE:
      return {
        ...state,
        pic: action.payload.pic
      }
    default:
      return state
  }
}
