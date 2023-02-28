import { fetchWishlistAPI, removeProd } from "./Wishlist.api"
import * as types from "./Wishlist.type"

export const fetchWishlistData = () => async (dispatch) => {
    try {
        let data = await fetchWishlistAPI()

        dispatch({ type: types.GET_WISHLIST_SUCCESS, payload: data })
        // console.log(data)
    } catch (err) {
        dispatch({ type: types.GET_WISHLIST_ERROR })
    }

}

export const removeProdData = (id) => async (dispatch) => {
    try {

        await removeProd(id)
        //console.log("Data:", data)

        dispatch({ type: types.DELETE_PRODUCT_SUCCESS })
        dispatch(fetchWishlistData())


    } catch (err) {
        dispatch({ type: types.GET_WISHLIST_ERROR })
    }
}