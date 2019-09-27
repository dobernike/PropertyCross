import { RESULT_LIST_UPDATE } from '../constants/actionTypes';

const initialState = {
    apartmentsList: [],
};

function apartmentsListReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case RESULT_LIST_UPDATE:
            return { ...state, apartmentsList: [...state.apartmentsList, ...payload] };
        default:
            return state;
    }
}

export default apartmentsListReducer;
