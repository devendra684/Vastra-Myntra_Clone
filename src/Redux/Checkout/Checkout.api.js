import axios from 'axios';


export const getCheckoutdataAPI = async () => {
    let res = await axios.get(`https://vastra.onrender.com/Checkout`);
    return res.data
}

export const postCheckoutdataAPI = async (product) => {
    let res = await axios.post(`https://vastra.onrender.com/Checkout`, product);
    return res.data
}

export const deleteCheckoutdataAPI = async (id) => {
    let res = await axios.delete(`https://vastra.onrender.com/Checkout/${id}`);
    return res.data
}   