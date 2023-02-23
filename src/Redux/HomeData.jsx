import axios from "axios";

export const HomeData = async() => {
// let res= await axios.get("http://localhost:3004/data")
let res= await axios.get("https://vastra.onrender.com/HomePageData")

  return res.data
  // return res.HomePageData

};
