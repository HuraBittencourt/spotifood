import { GET_CATEGORY_PLAYLIST_ERROR, GET_CATEGORY_PLAYLIST_SUCCESS } from "../constants/actions";

const initialState = {
    data: {}
}

const categoryPlaylist = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY_PLAYLIST_SUCCESS:
            return {
                ...state,
                data: action.data
            }

        case GET_CATEGORY_PLAYLIST_ERROR:
            return {
                ...state,
                error: action.error
            }
    
        default:
            return state;
    }
}

export default categoryPlaylist;