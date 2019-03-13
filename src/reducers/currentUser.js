import { SET_USER } from "../actions";

const initialState = {
    id: null,
    displayName: "",
    bio: "",
    username: ""
}

export default (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case SET_USER: 
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