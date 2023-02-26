import { ADD_CHECKOUT_PRODUCT, DELETE_CHECKOUT_PRODUCT, GET_CHECKOUT_ERROR, GET_CHECKOUT_LOADING, GET_CHECKOUT_SUCCESS } from "./Checkout.type"

const initialState = {
    loading: false,
    error: false,
    checkoutData: []
}

export const checkoutReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CHECKOUT_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case GET_CHECKOUT_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            }
        }
        case GET_CHECKOUT_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                checkoutData: payload,
            }
        }
        case ADD_CHECKOUT_PRODUCT: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        case DELETE_CHECKOUT_PRODUCT: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        default: {
            return state
        }
    }
}