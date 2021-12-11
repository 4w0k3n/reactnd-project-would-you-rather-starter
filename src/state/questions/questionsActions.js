import {RECEIVE_QUESTIONS, SAVE_ANSWER_TO_QUESTION} from "../actionTypes";

export function receiveQuestionsActionCreator (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function saveAnswerToQuestionActionCreator(authedUser, qid, answer){
    return {
        type: SAVE_ANSWER_TO_QUESTION,
        authedUser,
        qid,
        answer
    }
}