import { combineReducers } from "redux";
import productReducer from "./productReducer";
import productDetailReducer from "./productDetailReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    productReducer,
    productDetailReducer,
    // userReducer
})

export default rootReducer