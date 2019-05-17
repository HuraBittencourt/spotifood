import { CLOSE_MODAL_DETAILS, OPEN_MODAL_DETAILS } from "../constants/actions";

const intialState = {
    showModal: false
}

const manageModal = (state = intialState, action) => {
    switch (action.type) {
        case CLOSE_MODAL_DETAILS:
        case OPEN_MODAL_DETAILS:
            return {
                ...state,
                showModal: !action.data
            }
    
        default:
            return state;
    }
}

export default manageModal;