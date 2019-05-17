import { PLAYLIST_TRACKS_ERROR, PLAYLIST_TRACKS_SUCCESS } from "../constants/actions";

export const requestInitialState = () => ({
    data: {},
});

const initialState = {
    ...requestInitialState(),
    data: [],
}

export const requestSuccessState = state => ({
    ...state
  });


const playlistTracks = (state = initialState, action) => {
    switch (action.type) {
        case PLAYLIST_TRACKS_SUCCESS:
        return {
            ...state, 
            data: action.data
        }

        case PLAYLIST_TRACKS_ERROR:
            return {
                ...state,
                error: action.error
            }
            
    
        default:
            return state;
    }
}

export default playlistTracks;