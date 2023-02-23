import React, { useState } from "react";
import "../../helper.css";
import style from "./Filter.css";
import ProductData from "../Product/ProductData";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux/Reducer/data";

const Filter = () => {
  // const filterData = useSelector((state) => state.appData.filters);
  // const categoryData = useSelector((state) => state.apProductData.categories);
  // const brandData = useSelector((state) => state.apProductData.brands);

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);


  const selectBrand = (brand) => {
    if (brands.includes(brand)) {
      let newBrand = brands.filter(item => brand !== item);
      setBrands(newBrand);
      dispatch(filter({ type: 'BRAND', value: newBrand }))
    } else {
      // setBrands(brands.push(brand))
      setBrands([...brands, brand])
      dispatch(filter({ type: 'BRAND', value: [...brands, brand] }))
    }
  }
  const selectCategory = (category) => {
    if (categories.includes(category)) {
      let newCategory = categories.filter(item => category !== item);
      setCategories(newCategory);
      dispatch(filter({ type: 'CATEGORY', value: newCategory }))
    } else {
      // setBrands(brands.push(brand))
      setCategories([category])
      dispatch(filter({ type: 'CATEGORY', value: [...categories,category] }))
    }
  }

  const dispatch = useDispatch();
  return (
    <div className="filter-left-content">
      <div className="position-fixed left-content-border-new">
        <div className="filter-wrapper">
          <div className="container">
            <div className="label-space">
              <input
                type="radio"
                name="gender"
                onClick={() => dispatch(filter({ type: 'FILTER', value: 'men' }))}
              />
              <label>Men</label>
              <br />
              <input
                type="radio"
                name="gender"
                onClick={() => dispatch(filter({ type: 'FILTER', value: 'women' }))}

              />
              <label>Women</label>
              <br />
              <input
                type="radio"
                name="gender"
                onClick={() => dispatch(filter({ type: 'FILTER', value: 'boys' }))}

              />
              <label>Boys</label>
              <br />
              <input
                type="radio"
                name="gender"
                onClick={() => dispatch(filter({ type: 'FILTER', value: 'girls' }))}

              />
              <label>Girls</label>
            </div>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className="container">
            <h3>Categories</h3>
            <div className="label-space">
              <input
                type="checkbox"
                onClick={() => {
                  selectCategory('shirt')
                }
                }
              />
              <label>Shirts</label>
              <br />
              <input
                type="checkbox"
                onClick={() => {
                  selectCategory('sleepShirt')

                }
                }
              />
              <label>Sleep Shirts</label>
              <br />
              <input
                type="checkbox"
                onClick={() => {
                  selectCategory('dogShirt')
                  //   dispatch(filter({type: 'brand', value: brands}))
                }
                }
              />
              <label>Casual shirts</label>
            </div>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className="container">
            <h3>Brands</h3>
            <div className="label-space">
              <input type="checkbox" onClick={() => {
                //   debugger
                selectBrand('roadster')
                //   dispatch(filter({type: 'brand', value: brands}))
              }
              } />
              <label>Roadster</label>
              <br />
              <input type="checkbox" onClick={() => {
                selectBrand('zara')
                //   dispatch(filter({type: 'brand', value: brands}))
              }
              } />
              <label>Zara</label>
              <br />
              <input type="checkbox" onClick={() => {
                selectBrand('parx')

              }
              } />
              <label>Parx</label>
              <br />
              <input type="checkbox" onClick={() => {
                selectBrand('harvard')

              }
              } />

              <label>Harvard</label>
              <br />
              <input type="checkbox" onClick={() => {
                selectBrand('wrogn')
                //   dispatch(filter({type: 'brand', value: brands}))
              }
              } />
              <label>Wrogn</label>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
