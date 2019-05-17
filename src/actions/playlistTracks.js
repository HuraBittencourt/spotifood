import { PLAYLIST_TRACKS_ERROR, PLAYLIST_TRACKS_SUCCESS, SHOW_ERROR_MESSAGE } from "../constants/actions";

import { getFeaturedPlaylistTracks } from "../service/playlistTracks";

export const getPlaylistTracks = (trackId, params) => dispatch => {
    return getFeaturedPlaylistTracks(
        trackId,
        params,
        response => dispatch({
            type: PLAYLIST_TRACKS_SUCCESS,
            data: response
        }),
        error => { 
            dispatch({
                type: SHOW_ERROR_MESSAGE,
                error: {
                    message: 'Tivemos problemas para trazer os detalhes da playlist :('
                }
            })
        }
    )
}
