import { SET_USER, EDIT_USER, CLEAR_USER_DATA } from "../actions"
import { EDIT_PICTURE } from "../actions/editPicture"

const initialState = {
  id: null,
  pic: null,
  displayName: "",
  bio: "",
  username: "",
  updated: Date.now()
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        id: action.payload.id,
        displayName: action.payload.displayName,
        bio: action.payload.about,
        username: action.payload.username,
        pic: action.payload.pic,
        updated: Date.now()
      }
    case EDIT_USER:
      return {
        ...state,
        id: action.payload.id,
        displayName: action.payload.displayName,
        bio: action.payload.about,
        username: action.payload.username,
        updated: Date.now()
      }
    case EDIT_PICTURE:
      return {
        ...state,
        pic: action.payload.pic,
        updated: Date.now()
      }
    case CLEAR_USER_DATA:
      return {
        ...initialState
      }
    default:
      return state
  }
}
