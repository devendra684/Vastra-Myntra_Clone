import { deleteCheckoutdataAPI, getCheckoutdataAPI, postCheckoutdataAPI } from "./Checkout.api";
import { ADD_CHECKOUT_PRODUCT, DELETE_CHECKOUT_PRODUCT, GET_CHECKOUT_ERROR, GET_CHECKOUT_LOADING, GET_CHECKOUT_SUCCESS } from "./Checkout.type"


export const getCheckoutData=()=>async(dispatch)=>{
       dispatch({type:GET_CHECKOUT_LOADING})
    try {
       let data = await getCheckoutdataAPI();
       dispatch({type:GET_CHECKOUT_SUCCESS,payload:data});
    } catch (error) {
       dispatch({type:GET_CHECKOUT_ERROR}) 
    }
}

export const postCheckoutData=(product)=>async(dispatch)=>{
    dispatch({type:GET_CHECKOUT_LOADING})
 try {
    await postCheckoutdataAPI(product);
    dispatch({type:ADD_CHECKOUT_PRODUCT});
 } catch (error) {
    dispatch({type:GET_CHECKOUT_ERROR}) 
 }
}

export const deleteCheckoutData=(id)=>async(dispatch)=>{
    dispatch({type:GET_CHECKOUT_LOADING})
 try {
    await deleteCheckoutdataAPI(id);
    dispatch({type:DELETE_CHECKOUT_PRODUCT});
 } catch (error) {
    dispatch({type:GET_CHECKOUT_ERROR}) 
 }
}