import {  GET_BOOKS_SUCCESS, GET_BOOK, EDIT_BOOK } from "./types";
import {BaseAction} from "../types";

export const getBooksCompletedAction = (
    books
): BaseAction => ({
    type: GET_BOOKS_SUCCESS,
    payload: books,
});
export const getBooksByIDCompletedAction = (
    book
): BaseAction => ({
    type: GET_BOOK,
    payload: book,
});
export const editBookByCompletedAction = (
    book
): BaseAction => ({
    type: EDIT_BOOK,
    payload: book,
});