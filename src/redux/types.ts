export interface Book {
    id: string
    title: string
    author: string
    publishedDate: string
    bookCover: string,
    quantity: number
}
export interface User {
    id: string
    name: string
    surname: string
    username: string
    password: string
    role: string
}
export interface Order {
    id: string
    status: string
}

export interface BaseAction {
    type : string;
    payload?;
}