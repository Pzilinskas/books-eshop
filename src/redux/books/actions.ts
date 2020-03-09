import {  GET_BOOKS, GET_BOOK } from "./types";
import {BaseAction} from "../types";

export const getBooksCompletedAction = (
    books
): BaseAction => ({
    type: GET_BOOKS,
    payload: books,
});
export const getBooksByIDCompletedAction = (
    book
): BaseAction => ({
    type: GET_BOOK,
    payload: book,
});