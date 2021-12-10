import {combineReducers} from "redux";
import {authedUserReducer} from "./authedUser/authedUserReducer";
import {questionsReducer} from "./questions/questionsReducer";
import {usersReducer} from "./users/usersReducer";

export default combineReducers({
    authedUserReducer,
    questionsReducer,
    usersReducer
});