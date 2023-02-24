import axios from "axios";

export const HomeData = async() => {
// let res= await axios.get("http://localhost:3004/data")
// let res= await axios.get("https://vastra.onrender.com/HomePageData")
let res= await axios.get("http://localhost:8080/HomePageData")

  return res.data

};

export const HomeData2 = async() => {
  let res= await axios.get("http://localhost:8080/HomePageData")
  // let res= await axios.get("https://vastra.onrender.com/HomePageData")
  
    return res.data
  
  };
  