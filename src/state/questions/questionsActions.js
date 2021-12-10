import {RECEIVE_QUESTIONS} from "../actionTypes";

export function receiveQuestionsActionCreator (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}