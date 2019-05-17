import { GET_SEARCH_TRACKS_ERROR, GET_SEARCH_TRACKS_SUCCESS } from "../constants/actions";

const initialState = {
    data: {}
}

const searchTracks = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_TRACKS_SUCCESS:
            return {
                ...state,
                data: action.data
            }

        case GET_SEARCH_TRACKS_ERROR:
            return {
                ...state,
                error: action.error
            }
    
        default:
            return state;
    }
}

export default searchTracks;