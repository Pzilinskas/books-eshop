import {
    GET_BOOKS
} from "./types";
import {BaseAction} from '../types';

const initialState: BooksState = {
    books: []
};

export function booksReducer(
    state = initialState,
    action: BaseAction
): BooksState {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books:  action.payload
            };
        default:
            return state;
    }
}
