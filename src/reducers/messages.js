import {MESSAGES_SUCCEEDED, MESSAGES_FAILED} from '../actions/getMessages'

const initialState = {
  messages: [],
  messages_succeeded: false,
  messages_failed: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_SUCCEEDED:
      return {
        ...state,
        messages: [...state.messages, action.payload.messages],
        messages_succeeded: true,
        messages_failed: false
      }
    case MESSAGES_FAILED: 
      return {
        ...state,
        messages: [],
        messages_succeeded: false,
        messages_failed: true
      }
    default:
      return state;
  }
}
