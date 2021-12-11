import {_getUsers, _getQuestions, _saveQuestionAnswer} from "../../api/_DATA";
import {receiveQuestionsActionCreator, saveAnswerToQuestionActionCreator} from "../questions/questionsActions";
import {receiveUsersActionCreator, saveAnswerToUserActionCreator} from "../users/usersActions";


export function handleInitialData() {
    return (dispatch) => {
        return _getUsers().then((users) => {
            return _getQuestions().then((questions) => {
                dispatch(receiveUsersActionCreator(users));
                dispatch(receiveQuestionsActionCreator(questions));
            })
        })
    }
}

export function handleSaveAnswer(authedUser, qid, answer) {
    return (dispatch) => {
        return _saveQuestionAnswer({authedUser, qid, answer}).then(() => {
            dispatch(saveAnswerToQuestionActionCreator(authedUser, qid, answer));
            dispatch(saveAnswerToUserActionCreator(authedUser, qid, answer));
        })
    }
}