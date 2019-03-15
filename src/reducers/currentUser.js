import { SET_USER, EDIT_USER } from "../actions";

const initialState = {
    id: null,
    displayName: "",
    bio: "",
    username: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: 
            return {
                ...state,
                id: action.payload.id,
                displayName: action.payload.displayName,
                bio: action.payload.about,
                username: action.payload.username
            }
        case EDIT_USER:
            console.log(action.payload)
            return {
                ...state,
                id: action.payload.id,
                displayName: action.payload.displayName,
                bio: action.payload.about,
                username: action.payload.username
            }
        default:
            return state
    }
}