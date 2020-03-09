import {GET_USERS} from "../admin/types";

export const GET_BOOKS = "GET_BOOKS";

interface GetBooks {
    type: typeof GET_BOOKS;
    payload: books
}