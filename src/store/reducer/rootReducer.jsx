import { combineReducers } from "redux";
import productReducer from "./productReducer";
import postDetailReducer from "./postDetailReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    productReducer,
    // postDetailReducer,
    // userReducer
})

export default rootReducer