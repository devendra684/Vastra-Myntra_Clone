import { getFilterByBrand, getMensProductsAPI, getProductsSorting } from "./Product.api"
import * as types from "./Product.type"



export const getMensProducts = (page) => async (dispatch) => {
   dispatch({ type: types.GET_PRODUCTS_LOADING })
   try {
      let data = await getMensProductsAPI(page)
      //   console.log("data:", data )
      dispatch({
         type: types.GET_PRODUCTS_SUCCESS,
         payload: data
      })
   } catch (err) {
      dispatch({ type: types.GET_PRODUCTS_ERROR })
   }
}
export const getMainData = (page) => async (dispatch) => {
   dispatch({ type: types.GET_PRODUCTS_LOADING })
   try {
      let data = await getMensProductsAPI(page)
      //   console.log("data:", data )
      dispatch({
         type: types.GET_MAIN_DATA_SUCCESS,
         payload: data
      })
   } catch (err) {
      dispatch({ type: types.GET_PRODUCTS_ERROR })
   }
}
export const getFilterdProducts = (val) => async (dispatch) => {

   //console.log("val:", val)
   //   dispatch({type:types.GET_PRODUCTS_LOADING})

   try {

      dispatch({
         type: types.GET_FILTERED_PRODUCTS,
         payload: val
      })
   } catch (err) {
      dispatch({ type: types.GET_PRODUCTS_ERROR })
   }
}

export const getMensProductsSorted = (val, page) => async (dispatch) => {

   dispatch({ type: types.GET_PRODUCTS_LOADING })

   try {
      let data = await getProductsSorting(val, page)

      //console.log("data:", data)
      dispatch({
         type: types.GET_PRODUCTS_SUCCESS,
         payload: data
      })
   } catch (err) {
      dispatch({ type: types.GET_PRODUCTS_ERROR })
   }
}

export const getFilteredByBrand = (val, page) => async (dispatch) => {
   // console.log("Val:",val)
   dispatch({ type: types.GET_PRODUCTS_LOADING })

   try {
      let data = await getFilterByBrand(val, page)

      //   console.log("data:", data )
      dispatch({
         type: types.GET_PRODUCTS_SUCCESS,
         payload: data
      })
   } catch (err) {
      dispatch({ type: types.GET_PRODUCTS_ERROR })
   }
}


 




