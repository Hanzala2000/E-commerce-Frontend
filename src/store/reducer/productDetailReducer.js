import ActionType from '../constants/contant'
const INITIAL_STATE = {
    product: {},
    isLoading: false
}

export default function productDetailReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionType.PRODUCT_DETAIL_REQUESTED:
            return {
                isLoading: true,
                ...state
            }
        case ActionType.PRODUCT_DETAIL_SUCCESS:
            return {
                isLoading: false,
                product: action.payload,
            }
        case ActionType.PRODUCT_DETAIL_FAIL:
            return {
                isLoading: false,
                error: action.payload
            }
        case ActionType.CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}