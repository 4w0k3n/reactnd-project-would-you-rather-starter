import {SET_AUTHED_USER} from "../actionTypes";

export function setAutherUserActionCreator(id){
    return {
        type: SET_AUTHED_USER,
        id
    }
}