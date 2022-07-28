import ActionType from '../constants/contant'
const INITIAL_STATE = {
    product: [],
    isLoading: false
}

export default function postReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionType.All_PRODUCT_REQUESTED:
            return {
                isLoading: true,
                product: []
            }
        case ActionType.All_PRODUCT_SUCCESS:
            return {
                isLoading: false,
                product: action.payload,
            }
        case ActionType.All_PRODUCT_FAIL:
            return {
                isLoading: false,
            }
        default:
            return state
    }
}