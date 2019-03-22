import { USERS_OBTAINED } from "../actions";

const initialState = {
  usersArray: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_OBTAINED:
      return {
        ...state,
        usersArray: [...state.usersArray, ...action.payload.users]
      }
    default:
      return state
  }
}
