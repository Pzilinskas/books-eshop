import {  GET_BOOKS } from "./types";
import {BaseAction} from "../types";

export const getBooksCompletedAction = (
    books
): BaseAction => ({
    type: GET_BOOKS,
    payload: books,
});