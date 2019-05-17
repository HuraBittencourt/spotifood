import { CLEAR_ERROR_MESSAGE, SHOW_ERROR_MESSAGE } from "../constants/actions";

const initialState = {
    error: {}
}

const alert = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ERROR_MESSAGE:
            console.log("ACTIONNN ERROR", action)
            return {
                ...state,
                error: action.error
            }

        case CLEAR_ERROR_MESSAGE:
            return {
                ...state,
                error: undefined
            }
    
        default:
            return state;
    }
}

export default alert;