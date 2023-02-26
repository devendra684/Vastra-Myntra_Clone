import axios from "axios"

export const getMensProductsAPI = async (page) => {
    let res = await axios.get(`https://classic-world.onrender.com/MensData?_limit=12&_page=${page}`)
    // console.log(res.data)
    return res
}

export const getSingleProductAPI = async (id) => {
    let res = await axios.get(`https://classic-world.onrender.com/MensData/${id}`)
    return res
}
// sorting api calls

let baseURL = `https://classic-world.onrender.com/MensData?_limit=12&`

export const getProductsSorting = async (val, page) => {
    if (val === "PriceLTH") {
        let res = await axios.get(`https://classic-world.onrender.com/MensData?_limit=12&_page=${page}&_sort=discounted_price&_order=asc`)
        return res
    }
    if (val === "PriceHTL") {

        let res = await axios.get(`https://classic-world.onrender.com/MensData?_limit=12&_page=${page}&_sort=discounted_price&_order=desc`)
        return res
    }

    if (val === "discount") {
        let res = await axios.get(`https://classic-world.onrender.com/MensData?_limit=12&_page=${page}&_sort=${val}&_order=desc`)
        return res

    } 
    
    if (val === "rating") {
        let res = await axios.get(`https://classic-world.onrender.com/MensData?_limit=12&_page=${page}&_sort=${val}&_order=desc`)
        return res

    } else {
        let res = await axios.get(`${baseURL}`)
        return res
    }
}
// filter 

export const getFilterByBrand = async(val,page)=>{
val = (val.toString())
// console.log(val)
    let res = await axios.get(`https://classic-world.onrender.com/MensData?_limit=12&_page=${page}&brand=${val}`)

    return res
    // console.log(res.data)

}


