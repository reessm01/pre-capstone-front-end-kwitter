export const CLEAR_USER_DATA = "CLEAR_USER_DATA"

export const clearUserData = () => dispatch => {
  return dispatch({ type: CLEAR_USER_DATA })
}