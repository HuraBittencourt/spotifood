import { NEW_RELEASE_ERROR, NEW_RELEASE_SUCCESS, SHOW_ERROR_MESSAGE } from "../constants/actions";

import { getNewReleaseList } from "../service/newRelease";

export const newReleaseList = () => async dispatch => {
    // return getNewReleaseList()
    // .then(
    //     response => 
    //         dispatch({
    //             type: NEW_RELEASE_SUCCESS,
    //             data: response
    //         }),
    // ).catch(
    //     error => console.log(error)
    // )

    return getNewReleaseList(
        response => 
            dispatch({
                type: NEW_RELEASE_SUCCESS,
                data: response
            }),
        error => dispatch({
            type: SHOW_ERROR_MESSAGE,
            error: {
                message: 'Tivemos problemas para trazer a lista de New Releases :('
            }
        })
    )
}