import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../helper.css";
import { filter, sort } from "../../redux/Reducer/data";
import ProductData from "../Product/ProductData";
import ProductTitle from "../DetailsPage/ProductTitle";

const Sort = () => {
  const sortData = useSelector((state) => state.appData.sortArray);
  const [sorted, setSorted] = useState([]);


  const selectSort = (TYPE) => {
      // setBrands(newBrand);
      // setSorted([e])
      // console.log(sorted)
      // const array = [{price:201}, {price:202}]
      // const array = [...ProductData]
      // const check = array.sort((a, b)=> b.price- a.price)
      // console.log(type)
      dispatch(filter({type: TYPE, value:sorted}))
  }

  const dispatch = useDispatch()
  
  return (
    <div className="container">
      <ProductTitle title="Home / Shirts" />
      <div className="flexed">
        <div className="">
          <strong>FILTERS</strong>
        </div>
        <div className="container">
          <select name="sort" id="sorting" onChange={(e)=>selectSort(e.target.value)} >
              <option  value="DEFAULT">Sort by : Recommendation</option>
              <option value="LTH">Price: Low to high</option>
              <option value="HTL">Price: High to Low</option>   
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sort;
