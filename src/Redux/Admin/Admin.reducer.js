import { ADD_ADMIN_CONTACT, 
    ADD_ADMIN_EMAIL, 
    ADD_ADMIN_NAME, 
    ADD_ADMIN_PASSWORD, 
    ADD_CURRENT_USER, 
    ADD_KIDS_SUCCESS, 
    ADD_MENS_SUCCESS, 
    ADD_USERSLIST_DATA, 
    ADD_WOMENS_SUCCESS, 
    DELETE_PRODUCT_KIDS, 
    DELETE_PRODUCT_MENS, 
    DELETE_PRODUCT_WOMENS, 
    DELETE_USERSLIST_DATA, 
    GET_ADMINDATA_SUCCESS, 
    GET_CURRENT_USER, 
    GET_KIDS_SUCCESS, 
    GET_MENS_SUCCESS, 
    GET_PRODUCTS_ERROR, 
    GET_PRODUCTS_LOADING, 
    GET_USERSLIST_SUCCESS, 
    GET_WOMENS_SUCCESS, 
    UPDATE_CURRENT_USER, 
    UPDATE_PRODUCT_KIDS, 
    UPDATE_PRODUCT_MENS, 
    UPDATE_PRODUCT_WOMENS, 
    UPDATE_USERSLIST_DATA } from "./Admin.type"

const initialState = {
    loading: false,
    error: false,
    mensData: [],
    womensData: [],
    kidsData: [],
    usersListData: [],
    adminData: {},
    currentUserData: {
        email: "",
        name: "",
        password: "",
        logindetails: {
            createdAt: "",
            creationTime: "",
            lastLoginAt: "",
            lastSignInTime: ""
        },
        image: "",
        contact: null,
        isAuth: false,
    },
}
export const adminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCTS_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case GET_PRODUCTS_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            }
        }
        case ADD_MENS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        case ADD_WOMENS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        case ADD_KIDS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        case ADD_ADMIN_NAME: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        case ADD_ADMIN_EMAIL: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        case ADD_ADMIN_CONTACT: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        case ADD_ADMIN_PASSWORD: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        case ADD_CURRENT_USER:{
            return{
                ...state,
                loading:false,
                error:false,
            }
        }
        case ADD_USERSLIST_DATA:{
            return{
                ...state,
                loading:false,
                error:false,
            }
        }
        case GET_MENS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                mensData: payload,
            }
        }
        case GET_WOMENS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                womensData: payload,
            }
        }
        case GET_KIDS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                kidsData: payload,
            }
        }
        case GET_CURRENT_USER:{
            return{
                ...state,
                loading:false,
                error:false,
                currentUserData:payload,
            }
        }
        case UPDATE_PRODUCT_MENS: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        case UPDATE_PRODUCT_WOMENS: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        case UPDATE_PRODUCT_KIDS: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        case UPDATE_USERSLIST_DATA: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        case UPDATE_CURRENT_USER:{
            return{
                ...state,
                loading:false,
                error:false,

            }
        }
        case DELETE_PRODUCT_MENS: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        case DELETE_PRODUCT_WOMENS: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        case DELETE_PRODUCT_KIDS: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        case GET_USERSLIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                usersListData: payload,
            }
        }
        case GET_ADMINDATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                adminData: payload,
            }
        }
        case DELETE_USERSLIST_DATA: {
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