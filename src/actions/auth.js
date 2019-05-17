import { ADD_EXPIRATIO_DATE } from "../constants/actions";

export const setAuthExpirationDate = (expirationDate) => dispatch => {
    dispatch({
        type: ADD_EXPIRATIO_DATE,
        expirationDate: expirationDate
    })
}