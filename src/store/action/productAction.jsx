import ActionType from "../constants/contant";
import axios from "axios";

let getProduct = () => {    
    return (dispatch) => {
        axios({
            method: "GET",
            url: "http://localhost:8080/products/",
        })
        .then((success) => {
            console.log("success", success);
            dispatch({type:ActionType.All_PRODUCT_SUCCESS,payload:success.data.getAllProduct})
        })
        .catch((error) => {
            console.log("error", error);
        })
    }
}
let getProductDetail = (id) =>{
    return (dispatch) => {
        axios({
            method: "GET",
            url: `http://localhost:8080/products/product/${id}`,
        })
        .then((success) => {
            console.log("success", success);
            dispatch({type:ActionType.PRODUCT_DETAIL_SUCCESS,payload:success.data.getProduct})
        })
        .catch((error) => {
            console.log("error", error);
        })
    }
}
export {getProduct,getProductDetail}