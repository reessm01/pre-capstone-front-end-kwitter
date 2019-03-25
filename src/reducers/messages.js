import {
  MESSAGES_SUCCEEDED,
  MESSAGES_FAILED,
  UPDATE_MESSAGE,
  NEW_KWEET
} from "../actions/"

const initialState = {
  messages: [],
  messages_succeeded: false,
  messages_failed: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_SUCCEEDED:
      return {
        messages: [...action.payload.messages],
        messages_succeeded: true,
        messages_failed: false
      }
    case MESSAGES_FAILED:
      return {
        messages: [...state.messages],
        messages_succeeded: false,
        messages_failed: true
      }
    case NEW_KWEET:
      const newMessage = {...action.payload.message, likes: []}
      console.log(newMessage)
      return {
        ...state,
        messages: [newMessage, ...state.messages]
      }
    case UPDATE_MESSAGE:{
        const messages = state.messages.slice()
        const index = messages.findIndex(message => message.id === action.payload.id)
        messages[index] = action.payload
        
        return {
          ...state,
          messages: [...messages]
        }
      }
    default:
      return state
  }
}