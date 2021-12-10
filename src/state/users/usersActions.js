import {RECEIVE_USERS} from "../actionTypes";

export function receiveUsersActionCreator (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}