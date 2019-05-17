import { NEW_RELEASE_ERROR, NEW_RELEASE_REQUESTED, NEW_RELEASE_SUCCESS } from "../constants/actions";

const initialState = {
    data: {}
}

const newReleaseList = (state = initialState, action) => {
    switch (action.type) {
        case NEW_RELEASE_REQUESTED:
            console.log('Requested');
            break;
    
        case NEW_RELEASE_SUCCESS:
            return {
                ...state,
                data: action.data
            }

        case NEW_RELEASE_ERROR:
            return {
                ...state,
                error: action.error
            }
            
        default:
            return state;
    }
}

export default newReleaseList;