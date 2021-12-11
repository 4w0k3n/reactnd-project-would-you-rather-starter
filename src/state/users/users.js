import {RECEIVE_USERS, SAVE_ANSWER_TO_USER, SAVE_QUESTION_TO_USER} from "../actionTypes";

export function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {...state, ...action.users};
        case SAVE_ANSWER_TO_USER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        case SAVE_QUESTION_TO_USER:
            console.log(action);
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            }
        default:
            return state;
    }
}

