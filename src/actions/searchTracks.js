import { GET_SEARCH_TRACKS_ERROR, GET_SEARCH_TRACKS_SUCCESS, SHOW_ERROR_MESSAGE } from "../constants/actions";

export const getSearchTracks = (search) => dispatch => {
    return getSearchTracksList(
        search,
        response => dispatch({
            type: GET_SEARCH_TRACKS_SUCCESS,
            data: response
        }),
        error => {
            dispatch({
                type: SHOW_ERROR_MESSAGE,
                error: {
                    message: 'Tivemos problemas para buscar a playlist :('
                }
            })
    }
    )
}