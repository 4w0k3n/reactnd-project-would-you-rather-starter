import {RECEIVE_USERS, SAVE_ANSWER_TO_USER, SAVE_QUESTION_TO_USER} from "../actionTypes";

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


export function saveQuestionToUserActionCreator(question){
    return {
        type: SAVE_QUESTION_TO_USER,
        question
    }
}