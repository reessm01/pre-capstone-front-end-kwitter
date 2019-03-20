import {handleJsonResponse, jsonHeaders, domain} from '../actions/constants'
import {store} from '../index'
import {getMessageById, getMessages} from '../actions/getMessages'

export const LIKED = 'LIKED'
export const REMOVE_LIKE = 'REMOVE_LIKE'

const url = domain + '/likes/'

export const addLike = (messageId) => dispatch => {

  const token = store.getState().auth.login.token

  return fetch(url, {
      method: "POST",
      headers: {
          ...jsonHeaders,
          Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
          messageId: messageId
      })
  }).then(handleJsonResponse) 
    .then(result => {
      dispatch({
          type: LIKED,
          payload: result.like
      })
    })
}

export const toggleLike = (messageID) => (dispatch, getState) => {
    const userId = getState().currentUser.id
    const message = getState().messages.messages.find(message => message.id === messageID)
    const like = message.likes.find(like => like.userId === userId)
    
    if (like) {
      dispatch(removeLike(like.id)).then(() => {
        dispatch(getMessageById(messageID));
      })
    } else {
      dispatch(addLike(messageID)).then(() => {
        dispatch(getMessageById(messageID));
      })
    }

    dispatch(getMessages())
  }

export const removeLike = likeId => {
  return function(dispatch, getState){
    const token = getState().auth.login.token

    return fetch(url + likeId, {
      method: 'DELETE',
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
        charset: "utf-8"
      }
    })
    .then(response => {
      dispatch({
        type: REMOVE_LIKE,
        payload: response.like
      })
    })
  }
}