import {combineReducers} from "redux";
import {authedUser} from "./authedUser/authedUser";
import {questions} from "./questions/questions";
import {users} from "./users/users";

export default combineReducers({
    authedUser: authedUser,
    questions: questions,
    users: users
});