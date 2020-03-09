import {
    GET_USERS_SUCCESS
} from "./types";
import {BaseAction} from '../types';

const initialState: AdminState = {
    users: []
};

export function adminReducer(
    state = initialState,
    action: BaseAction
): AdminState {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users:  action.payload
            };
        default:
            return state;
    }
}
