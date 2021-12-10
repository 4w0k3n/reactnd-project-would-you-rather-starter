import {logger} from "./middleware/logger";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";

export default applyMiddleware(
    thunk,
    logger
);