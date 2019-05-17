import { GET_CATEGORY_PLAYLIST_ERROR, GET_CATEGORY_PLAYLIST_SUCCESS, SHOW_ERROR_MESSAGE } from "../constants/actions";

import { categoryPlaylist } from "../service/categoryPlaylist";

export const getCategoryPlaylist = categoryId => dispatch => {
    // return categoryPlaylist(categoryId)
    // .then(
    //     response => dispatch({
    //         type: GET_CATEGORY_PLAYLIST_SUCCESS,
    //         data: response
    //     }),
    // ).catch(
    //     error => console.log(error)
    // )
    
    return categoryPlaylist(
        categoryId,
        response => dispatch({
            type: GET_CATEGORY_PLAYLIST_SUCCESS,
            data: response
        }),
        error => dispatch({
            type: SHOW_ERROR_MESSAGE,
            error: {
                message: 'Não conseguimos trazer os itens das categorias :('
            }
        })
    )
}