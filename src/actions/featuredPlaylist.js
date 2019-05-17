import { PLAYLIST_TRENDING_ERROR, PLAYLIST_TRENDING_REQUESTED, PLAYLIST_TRENDING_SUCCESS, SHOW_ERROR_MESSAGE } from "../constants/actions";

import { getFeaturedPlaylist } from "../service/featuredPlaylist";

export const featuredPlaylist = query => async dispatch => {
    dispatch({
        type: PLAYLIST_TRENDING_REQUESTED,
    });

    return getFeaturedPlaylist(
        response => 
            dispatch({
                type: PLAYLIST_TRENDING_SUCCESS,
                data: response
            }),
        error => dispatch({
            type: SHOW_ERROR_MESSAGE,
            error: {
                message: 'Tivemos problemas para trazer a lista de Featured Playlist :('
            }
        }),
        query
    )
}