import {_getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion} from "../../api/_DATA";
import {receiveQuestionsActionCreator, saveAnswerToQuestionActionCreator, saveQuestionToQuestionsActionCreator} from "../questions/questionsActions";
import {receiveUsersActionCreator, saveAnswerToUserActionCreator, saveQuestionToUserActionCreator} from "../users/usersActions";
import {push} from "react-router-redux";


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

export function handleSaveQuestion(question){
    return (dispatch) => {
        return _saveQuestion(question).then((formattedQuestion) => {
            dispatch(saveQuestionToUserActionCreator(formattedQuestion));
            dispatch(saveQuestionToQuestionsActionCreator(formattedQuestion));

        })
    }
}

