import {_getUsers, _getQuestions} from "../../api/_DATA";
import {receiveQuestionsActionCreator} from "../questions/questionsActions";
import {receiveUsersActionCreator} from "../users/usersActions";

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