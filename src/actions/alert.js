import { CLEAR_ERROR_MESSAGE } from "../constants/actions";

export const clearAlertNotification = () => dispatch => {
    return dispatch({
        type: CLEAR_ERROR_MESSAGE,
    })
}