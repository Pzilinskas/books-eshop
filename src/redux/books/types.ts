export const GET_BOOKS = "GET_BOOKS";
export const GET_BOOK = "GET_BOOK";

interface GetBooks {
    type: typeof GET_BOOKS;
    payload: books
}