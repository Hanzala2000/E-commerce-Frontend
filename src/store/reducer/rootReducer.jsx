import { combineReducers } from "redux";
import postReducer from "./postReducer";
import postDetailReducer from "./postDetailReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    postReducer,
    postDetailReducer,
    userReducer
})

export default rootReducer