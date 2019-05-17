import { ADD_EXPIRATIO_DATE } from "../constants/reducers";

const initialState = {}

const addExpirationDate = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPIRATIO_DATE: {
            return {
                ...state,
                expirationDate: action.expirationDate
            }
        }

        default: {
            return state;
        }
    }
}

export default addExpirationDate;