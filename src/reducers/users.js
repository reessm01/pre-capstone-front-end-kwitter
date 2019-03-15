import { USERS_OBTAINED } from "../actions";

const initialState = {
  users: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_OBTAINED:
      return {
        ...state,
        users: [...state.users, ...action.payload.users]
      }
    default:
      return state
  }
}
