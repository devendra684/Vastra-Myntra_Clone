import axios from "axios"

export const fetchWishlistAPI = async () => {
    let res = await axios.get(`https://vastra.onrender.com/wishlist`)
    return res.data
}

export const removeProd = async (id) => {
    let res = await axios.delete(`https://vastra.onrender.com/wishlist/${id}`)
    return res.data
}
