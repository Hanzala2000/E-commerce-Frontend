import ActionType from "../constants/contant";
import axios from "axios";

let getProduct = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ActionType.All_PRODUCT_REQUESTED,
            })
            axios({
                method: "GET",
                url: "http://localhost:8080/products/",
            })
                .then((success) => {
                    console.log("success", success);
                    dispatch({ type: ActionType.All_PRODUCT_SUCCESS, payload: success.data })
                })
                .catch((error) => {
                    dispatch({
                        type: ActionType.All_PRODUCT_FAIL,
                        payload: error.response.data.message
                    })
                })

        } catch (error) {
            console.log("error", error.message);

        }
    }
}
let getProductDetail = (id) => {
    return (dispatch) => {
        dispatch({
            type:ActionType.PRODUCT_DETAIL_REQUESTED
        })
        axios({
            method: "GET",
            url: `http://localhost:8080/products/${id}`,
        })
            .then((success) => {
                dispatch({ type: ActionType.PRODUCT_DETAIL_SUCCESS, payload: success.data.getProduct })
            })
            .catch((error) => {
                dispatch({
                    type: ActionType.PRODUCT_DETAIL_FAIL,
                    payload: error.response.data.message
                })
            })
    }
}

let clearErrors = () => {
    return async (dispatch) => {
        dispatch({
            type: ActionType.CLEAR_ERRORS
        })
    }
}
export { getProduct, getProductDetail, clearErrors }