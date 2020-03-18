import { GET_USERS, GET_USERS_SUCCESS} from "./admin/types";
import {getBooksCompletedAction, getBooksByIDCompletedAction, editBookByCompletedAction} from './books/actions'
import {getUsersCompletedAction} from './admin/actions'

export const  fetchUsers = () => {
    return (dispatch) => {
        const payload = JSON.parse((localStorage.users));
        setTimeout(() => {
            dispatch(getUsersCompletedAction(payload))
        }, 1000);
    };
};

export const  fetchBooks = () => {
    return (dispatch) => {
        const payload = JSON.parse(localStorage.books);
        setTimeout(() => {
            dispatch(getBooksCompletedAction(payload))
        }, 1000);
    };
};

export const  fetchBookById = (bookId) => {
    return (dispatch) => {
        const payload = JSON.parse(localStorage.books).filter((book) => {
            if(book._id === bookId) {
                return book;
            }
        });
        setTimeout(() => {
            dispatch(getBooksByIDCompletedAction(payload))
        }, 1000);
    };
};

export const  editBook = (bookObject) => {
    return (dispatch) => {
        const payload = JSON.parse(localStorage.books).filter((book) => {
            if(book._id === bookObject._id) {
                return book;
            }
        });
        setTimeout(() => {
            dispatch(getBooksByIDCompletedAction(payload))
        }, 1000);
    };
};