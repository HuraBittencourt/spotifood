import { PLAYLIST_TRENDING_ERROR, PLAYLIST_TRENDING_REQUESTED, PLAYLIST_TRENDING_SUCCESS } from "../constants/actions";

const initialState = {
    data: {}
}

const playlistTrending = (state = initialState, action) => {
    switch(action.type) {
        case PLAYLIST_TRENDING_REQUESTED: 
            return { 
                ...state,
                loading: true
            }
        case PLAYLIST_TRENDING_SUCCESS:
            return {
                ...state,
                data: action.data
            }

        case PLAYLIST_TRENDING_ERROR:
            return {
                ...state,
                error: action.error
            }

        default:
            return state;
    }
}

export default playlistTrending;