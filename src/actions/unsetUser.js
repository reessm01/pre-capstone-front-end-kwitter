export const UNSET_USER = "UNSET_USER"

export const unsetUser = () => dispatch => {
  return dispatch({ type: UNSET_USER })
}
