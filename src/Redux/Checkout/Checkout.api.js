import axiox from 'axios';

export const getCheckoutdataAPI=async()=>{
 let res = await axiox.get(`https://classic-world.onrender.com/Checkout`);
 return res.data
}

export const postCheckoutdataAPI=async(product)=>{
    let res = await axiox.post(`https://classic-world.onrender.com/Checkout`,product);
    return res.data
}

export const deleteCheckoutdataAPI=async(id)=>{
let res = await axiox.delete(`https://classic-world.onrender.com/Checkout/${id}`);
return res.data
}   