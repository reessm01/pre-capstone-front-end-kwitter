export const LOCAL = 'LOCAL'

export const local = localData => dispatch => {
    dispatch({
        type: LOCAL,
        data: localData
    })
}