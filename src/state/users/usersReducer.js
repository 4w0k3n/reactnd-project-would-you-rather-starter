import {RECEIVE_USERS} from "../actionTypes";

export function usersReducer(state = {}, action){
    switch (action.type) {
        case RECEIVE_USERS:
            return {...state, ...action.users};
        default:
            return state;
    }
}