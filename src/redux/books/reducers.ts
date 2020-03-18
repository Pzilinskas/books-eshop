import {
    GET_BOOKS_SUCCESS,
    GET_BOOK,
} from "./types";
import {BaseAction} from '../types';

const initialState: BooksState = {
    books: [],
    selectedBook: ''
};

export function booksReducer(
    state = initialState,
    action: BaseAction
): BooksState {
    switch (action.type) {
        case GET_BOOKS_SUCCESS:
            return {
                ...state,
                selectedBook: '',
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
