import {_getUsers, _getQuestions} from "../../api/_DATA";
import {receiveQuestionsActionCreator} from "../questions/questionsActions";
import {receiveUsersActionCreator} from "../users/usersActions";
import {setAutherUserActionCreator} from "../authedUser/authedUserActions";

const defaultLogin = 'sarahedo'
export function handleInitialData(){
    return (dispatch) => {
        return _getUsers().then((users) => {
            console.log(users)
            return _getQuestions().then((questions) =>{
                dispatch(receiveUsersActionCreator(users));
                dispatch(receiveQuestionsActionCreator(questions));
                dispatch(setAutherUserActionCreator(defaultLogin));
            })
        })
    }
}