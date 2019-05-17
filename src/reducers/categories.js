import { GET_CATEGORIES_ERROR, GET_CATEGORIES_SUCCESS } from "../constants/actions";

const initialState = {
    data: {}
}

const categories = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                data: action.data
            }
        case GET_CATEGORIES_ERROR:
            return {
                ...state,
                error: action.error
            }

        default:
            return state;
    }
}

export default categories;