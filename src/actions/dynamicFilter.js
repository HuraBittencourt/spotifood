import { GET_MOCKY_FILTERS_SUCCESS, SHOW_ERROR_MESSAGE } from "../constants/actions";

import { getDynamicFilters } from "../service/dynamicFilter";

export const dynamicFilter = () => dispatch => {

    return getDynamicFilters(
        response => dispatch({
            type: GET_MOCKY_FILTERS_SUCCESS,
            data: response
        }),
        error => dispatch({
            type: SHOW_ERROR_MESSAGE,
            error: {
                message: 'Não foi possível trazer os filtros :('
            }
        })
    ) 
}