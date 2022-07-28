import axios from "axios";
import ActionType from '../constants/contant'

let logFunc = (email, password,) => {
    return (dispatch) => {
        dispatch({ type: ActionType.USER_REQUEST })
        const config = { headers: { "Content-Type": "application/json" } }
        axios({
            method: "POST",
            url: "http://localhost:8080/users/login",
            data: {
                email, password
            },
            config 
        })
            .then((success) => {
                dispatch({ type: ActionType.USER_REQUEST_SUCCESS })
                console.log("success", success);
                dispatch({ type: ActionType.USER_REQUEST_SUCCESS, payload: success.data.user })
            })
            .catch((error) => {
                dispatch({ type: ActionType.USER_REQUEST_FAIL })
                console.log("error", error);
            })
    }
}

let signFunc = (name, email, password) => {
    return (dispatch) => {
        dispatch({ type: ActionType.USER_REQUEST })
        const config = { headers: { "Content-Type": "application/form-data" } }
        axios({
            method: "POST",
            url: "http://localhost:8080/users/register",
            data: {
                name, email, password
            },
            config
        })
            .then((success) => {
                dispatch({ type: ActionType.USER_REQUEST_SUCCESS })
                console.log("success", success);
                dispatch({ type: ActionType.USER_REQUEST_SUCCESS, payload: success.data.user })
            })
            .catch((error) => {
                dispatch({ type: ActionType.USER_REQUEST_FAIL })
                console.log("error", error);
            })
    }
}

let loadUser = () => {
    return (dispatch) => {
        dispatch({ type: ActionType.LOAD_USER_REQUEST })
        // const config = { headers: { "Content-Type": "application/json" } }
        axios({
            method: "GET",
            url: "http://localhost:8080/users/me",
            // config
        })
            .then((success) => {
                dispatch({ type: ActionType.LOAD_USER_SUCCESS })
                console.log("success", success);
                dispatch({ type: ActionType.LOAD_USER_SUCCESS, payload: success.data.user })
            })
            .catch((error) => {
                dispatch({ type: ActionType.LOAD_USER_FAIL })
                console.log("error", error);
            })
    }
}
export { logFunc, signFunc , loadUser }