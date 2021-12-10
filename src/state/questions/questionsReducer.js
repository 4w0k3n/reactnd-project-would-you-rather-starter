import {RECEIVE_QUESTIONS} from "../actionTypes";

export function questionsReducer(state = {}, action){
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {...state, ...action.questions};
        default:
            return state;
    }
}