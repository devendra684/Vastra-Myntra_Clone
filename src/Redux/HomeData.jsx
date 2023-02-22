import axios from "axios";

export const HomeData = async() => {
 let res= await axios.get("http://localhost:3004/data")
  return res.data.HomePageData

};
