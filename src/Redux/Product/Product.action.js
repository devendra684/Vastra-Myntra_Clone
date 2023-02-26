import {
   getFilterByBrand,
   getMensProductsAPI,
   getProductsSorting,
   getWomensFilterByBrand,
   getWomensProductsAPI,
   getWomensProductsSorting,
   getKidsFilterByBrand,
   getKidsProductsAPI,
   getKidsProductsSorting
} from "./Product.api"
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
export const getFilteredProducts = (val) => async (dispatch) => {

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

// ---

export const getWomensProducts = (page) => async (dispatch) => {
   dispatch({ type: types.GET_PRODUCTS_LOADING })
   try {
      let data = await getWomensProductsAPI(page)
      //   console.log("data:", data )
      dispatch({
         type: types.GET_PRODUCTS_SUCCESS,
         payload: data
      })
   } catch (err) {
      dispatch({ type: types.GET_PRODUCTS_ERROR })
   }
}
export const getWomensMainData = (page) => async (dispatch) => {
   dispatch({ type: types.GET_PRODUCTS_LOADING })
   try {
      let data = await getWomensProductsAPI(page)
      //   console.log("data:", data )
      dispatch({
         type: types.GET_MAIN_DATA_SUCCESS,
         payload: data
      })
   } catch (err) {
      dispatch({ type: types.GET_PRODUCTS_ERROR })
   }
}
export const getWomensFilteredProducts = (val) => async (dispatch) => {

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

export const getWomensProductsSorted = (val, page) => async (dispatch) => {

   dispatch({ type: types.GET_PRODUCTS_LOADING })

   try {
      let data = await getWomensProductsSorting(val, page)

      //console.log("data:", data)
      dispatch({
         type: types.GET_PRODUCTS_SUCCESS,
         payload: data
      })
   } catch (err) {
      dispatch({ type: types.GET_PRODUCTS_ERROR })
   }
}

export const getWomensFilteredByBrand = (val, page) => async (dispatch) => {
   // console.log("Val:",val)
   dispatch({ type: types.GET_PRODUCTS_LOADING })

   try {
      let data = await getWomensFilterByBrand(val, page)

      //   console.log("data:", data )
      dispatch({
         type: types.GET_PRODUCTS_SUCCESS,
         payload: data
      })
   } catch (err) {
      dispatch({ type: types.GET_PRODUCTS_ERROR })
   }
}

// ---Kids Section

export const getKidsProducts = (page) => async (dispatch) => {
   dispatch({ type: types.GET_PRODUCTS_LOADING })
   try {
      let data = await getKidsProductsAPI(page)
      //   console.log("data:", data )
      dispatch({
         type: types.GET_PRODUCTS_SUCCESS,
         payload: data
      })
   } catch (err) {
      dispatch({ type: types.GET_PRODUCTS_ERROR })
   }
}
export const getKidsMainData = (page) => async (dispatch) => {
   dispatch({ type: types.GET_PRODUCTS_LOADING })
   try {
      let data = await getKidsProductsAPI(page)
      //   console.log("data:", data )
      dispatch({
         type: types.GET_MAIN_DATA_SUCCESS,
         payload: data
      })
   } catch (err) {
      dispatch({ type: types.GET_PRODUCTS_ERROR })
   }
}
export const getKidsFilteredProducts = (val) => async (dispatch) => {

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

export const getKidsProductsSorted = (val, page) => async (dispatch) => {

   dispatch({ type: types.GET_PRODUCTS_LOADING })

   try {
      let data = await getKidsProductsSorting(val, page)

      //console.log("data:", data)
      dispatch({
         type: types.GET_PRODUCTS_SUCCESS,
         payload: data
      })
   } catch (err) {
      dispatch({ type: types.GET_PRODUCTS_ERROR })
   }
}

export const getKidsFilteredByBrand = (val, page) => async (dispatch) => {
   // console.log("Val:",val)
   dispatch({ type: types.GET_PRODUCTS_LOADING })
   try {
      let data = await getKidsFilterByBrand(val, page)
      //   console.log("data:", data )
      dispatch({
         type: types.GET_PRODUCTS_SUCCESS,
         payload: data
      })
   } catch (err) {
      dispatch({ type: types.GET_PRODUCTS_ERROR })
   }
}
