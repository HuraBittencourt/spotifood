import { GET_MOCKY_FILTERS_SUCCESS } from "../constants/actions";

const initialState = {
    data: {}
}

const dynamicFilter = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOCKY_FILTERS_SUCCESS:
            return {
                ...state,
                data: action.data
            }
    
        default:
            return state;
    }
}

export default dynamicFilter;