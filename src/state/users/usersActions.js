import {RECEIVE_USERS, SAVE_ANSWER_TO_USER} from "../actionTypes";

export function receiveUsersActionCreator (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function saveAnswerToUserActionCreator(authedUser, qid, answer){
    return {
        type: SAVE_ANSWER_TO_USER,
        authedUser,
        qid,
        answer
    }
}

