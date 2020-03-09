import {
    GET_BOOKS,
    GET_BOOK
} from "./types";
import {BaseAction} from '../types';

const initialState: BooksState = {
    books: [],
    selectedBook: []
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
        case GET_BOOK:
            return {
                ...state,
                selectedBook:  action.payload
            };
        default:
            return state;
    }
}
