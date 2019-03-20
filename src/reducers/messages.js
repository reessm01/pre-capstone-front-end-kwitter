import { MESSAGES_SUCCEEDED, MESSAGES_FAILED, UPDATE_MESSAGE} from "../actions/getMessages"
import { NEW_KWEET } from "../actions"
import {LIKED} from "../actions/addLike"

const initialState = {
  messages: [],
  messages_succeeded: false,
  messages_failed: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_SUCCEEDED:
      console.log(action.payload.messages)
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages],
        messages_succeeded: true,
        messages_failed: false
      }
    case MESSAGES_FAILED:
      return {
        ...state,
        messages: [...state.messages],
        messages_succeeded: false,
        messages_failed: true
      }
    case NEW_KWEET:
      return {
        ...state,
        messages: [action.payload.message, ...state.messages],
        messages_failed: false
      }
    case LIKED:
      return {
        ...state,
        messages: [ 
          state.messages.map(message => {
            if(message.id === action.payload.like.messageId) {
              message.likes = [ ...state.message.likes, action.payload.like ]
            }
            return message
          })
        ]
      }
      
      
    default:
      return state
  }
}
