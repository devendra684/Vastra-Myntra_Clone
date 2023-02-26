import * as types from "./Product.type"

let initialState={
    loading:false,
    error:false,
    totalPages:0,
    products:[],
    mainData:[],
    filteredBrandData:[]
}

export const mensProductReducer = (state =initialState , {type , payload})=>{
    switch(type){
        case types.GET_PRODUCTS_LOADING:{ 
        return {
                ...state,
                loading:true,
                error:false
            }
        }
        case types.GET_PRODUCTS_SUCCESS:{ 
            return {
                ...state,
                loading:false,
                error:false,
                products:payload.data,
                totalPages:payload.headers["x-total-count"],               
            }
        }
        case types.GET_MAIN_DATA_SUCCESS:{ 
            return {
                ...state,
                loading:false,
                error:false,
                mainData:payload.data,
            }
        }
        case types.GET_FILTERED_PRODUCTS:{ 
            let filteredBrand =state.products.filter((prod)=>(
                    (prod.brand === payload)
                    ))
                 //console.log("payload",payload)
            return {
                ...state,
                loading:false,
                error:false,
                filteredBrandData:filteredBrand
            }
        }
        case types.GET_PRODUCTS_ERROR:{ 
            return {
                ...state,
                loading:false,
                error:true
            }
        }
        default : {
            return state
        }
    }
}


export const WomensProductReducer = (state =initialState , {type , payload})=>{
    switch(type){
        case types.GET_PRODUCTS_LOADING:{ 
        return {
                ...state,
                loading:true,
                error:false
            }
        }
        case types.GET_PRODUCTS_SUCCESS:{ 
            return {
                ...state,
                loading:false,
                error:false,
                products:payload.data,
                totalPages:payload.headers["x-total-count"],               
            }
        }
        case types.GET_MAIN_DATA_SUCCESS:{ 
            return {
                ...state,
                loading:false,
                error:false,
                mainData:payload.data,
            }
        }
        case types.GET_FILTERED_PRODUCTS:{ 
            let filteredBrand =state.products.filter((prod)=>(
                    (prod.brand === payload)
                    ))
                 //console.log("payload",payload)
            return {
                ...state,
                loading:false,
                error:false,
                filteredBrandData:filteredBrand
            }
        }
        case types.GET_PRODUCTS_ERROR:{ 
            return {
                ...state,
                loading:false,
                error:true
            }
        }
        default : {
            return state
        }
    }
}


export const KidsProductReducer = (state =initialState , {type , payload})=>{
    switch(type){
        case types.GET_PRODUCTS_LOADING:{ 
        return {
                ...state,
                loading:true,
                error:false
            }
        }
        case types.GET_PRODUCTS_SUCCESS:{ 
            return {
                ...state,
                loading:false,
                error:false,
                products:payload.data,
                totalPages:payload.headers["x-total-count"],               
            }
        }
        case types.GET_MAIN_DATA_SUCCESS:{ 
            return {
                ...state,
                loading:false,
                error:false,
                mainData:payload.data,
            }
        }
        case types.GET_FILTERED_PRODUCTS:{ 
            let filteredBrand =state.products.filter((prod)=>(
                    (prod.brand === payload)
                    ))
                 //console.log("payload",payload)
            return {
                ...state,
                loading:false,
                error:false,
                filteredBrandData:filteredBrand
            }
        }
        case types.GET_PRODUCTS_ERROR:{ 
            return {
                ...state,
                loading:false,
                error:true
            }
        }
        default : {
            return state
        }
    }
}