import { CLOSE_MODAL_DETAILS, OPEN_MODAL_DETAILS } from "../constants/actions";

export const closeModalDetails = modalDetailsState => dispatch => {
    return dispatch({
        type: CLOSE_MODAL_DETAILS,
        data: modalDetailsState
    })
}

export const openModalDetails = modalDetailsState => dispatch => {
    return dispatch({
        type: OPEN_MODAL_DETAILS,
        data: modalDetailsState
    })
}