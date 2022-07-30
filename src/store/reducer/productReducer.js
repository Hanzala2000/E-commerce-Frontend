import ActionType from '../constants/contant'
const INITIAL_STATE = {
    product: [],
    isLoading: false
}

export default function productReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionType.All_PRODUCT_REQUESTED:
            return {
                isLoading: true,
                product: []
            }
        case ActionType.All_PRODUCT_SUCCESS:
            return {
                isLoading: false,
                product: action.payload.products,
                productsCount: action.payload.productsCount
            }
        case ActionType.All_PRODUCT_FAIL:
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