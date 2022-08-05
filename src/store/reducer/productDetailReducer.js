import ActionType from '../constants/contant'
const INITIAL_STATE = {
    product: {},
    loading: false
}

export default function productDetailReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionType.PRODUCT_DETAIL_REQUESTED:
            return {
                loading: true,
                product: {}
            }
        case ActionType.PRODUCT_DETAIL_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            }
        case ActionType.PRODUCT_DETAIL_FAIL:
            return {
                loading: false,
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