import {RECEIVE_QUESTIONS, SAVE_ANSWER_TO_QUESTION} from "../actionTypes";
import {authedUser} from "../authedUser/authedUser";

export function questions(state = {}, action){
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {...state, ...action.questions};
        case SAVE_ANSWER_TO_QUESTION:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        default:
            return state;
    }
}