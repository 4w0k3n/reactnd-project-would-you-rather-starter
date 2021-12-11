import {RECEIVE_QUESTIONS, SAVE_ANSWER_TO_QUESTION, SAVE_QUESTION_TO_QUESTIONS} from '../actionTypes';

export function receiveQuestionsActionCreator(questions) {
    return {
        type: RECEIVE_QUESTIONS, questions
    };
}

export function saveAnswerToQuestionActionCreator(authedUser, qid, answer) {
    return {
        type: SAVE_ANSWER_TO_QUESTION, authedUser, qid, answer
    };
}

export function saveQuestionToQuestionsActionCreator(question) {
    return {
        type: SAVE_QUESTION_TO_QUESTIONS, question
    };
}