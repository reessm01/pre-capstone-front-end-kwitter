import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL } from "../actions";

const initialState = {
  registerLoading: false,
  register: null,
  registerError: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        registerLoading: true,
        registerError: null
      }
    case REGISTER_SUCCESS:
      return { 
        ...state,
        register: action.payload,
        registerLoading: false 
      }
    case REGISTER_FAIL:
      return {
        ...state,
        registerError: action.payload,
        registerLoading: false
      }

    default:
      return state;
  }
}
