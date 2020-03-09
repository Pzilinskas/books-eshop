
import { Action } from 'redux'
import { sendMessage } from './store/chat/actions'
import { RootState } from './store'
import { ThunkAction } from 'redux-thunk'
import { GET_USERS, GET_USERS_SUCCESS} from "./admin/types";
import { GET_BOOKS } from './books/types';

export const  fetchUsers = () => {
    return (dispatch) => {
        const payload = JSON.parse((localStorage.users));
        setTimeout(() => {
            dispatch({
                type: GET_USERS_SUCCESS,
                payload: payload,
            })
        }, 1000);
    };
};

export const  fetchBooks = () => {
    return (dispatch) => {
        const payload = JSON.parse((localStorage.books));
        setTimeout(() => {
            dispatch({
                type: GET_BOOKS,
                payload: payload,
            })
        }, 1000);
    };
};