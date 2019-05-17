import { GET_CATEGORIES_ERROR, GET_CATEGORIES_SUCCESS, SHOW_ERROR_MESSAGE } from "../constants/actions";

import { categories } from "../service/categories";

export const getCategories = () => dispatch => {
    // return categories(
    //     response => dispatch({
    //         type: GET_CATEGORIES_SUCCESS,
    //         data: response.data
    //     }),
    //     error => console.log(error)
    // )
    return categories(
        response => dispatch({
            type: GET_CATEGORIES_SUCCESS,
            data: response
        }),
        error => dispatch({
            type: SHOW_ERROR_MESSAGE,
            error: {
                message: 'Não conseguimos trazer as categorias :('
            }
        })
    )
}