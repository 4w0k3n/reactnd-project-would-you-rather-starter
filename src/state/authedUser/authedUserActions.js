import {SET_AUTHED_USER} from "../actionTypes";

export function setAuthedUserActionCreator(id){
    return {
        type: SET_AUTHED_USER,
        id
    }
}