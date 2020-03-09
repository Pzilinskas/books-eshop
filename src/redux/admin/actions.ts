import {  GET_USERS_SUCCESS } from "./types";
import {BaseAction} from "../types";

export const getUsersCompletedAction = (
    users
): BaseAction => ({
    type: GET_USERS_SUCCESS,
    payload: users,
});