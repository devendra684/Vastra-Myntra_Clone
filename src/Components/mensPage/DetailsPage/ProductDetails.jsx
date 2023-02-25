import React from "react";
import Style from "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  removeFromWishList,
} from "../../../Redux/mensPage/Reducer/data";

const ProductDetails = (props) => {
  const wishlistData = useSelector((state) => state.appData.value.wishlist);
  const dispatch = useDispatch();
  return (
    <>
      <div className="right-details-content">
        <h2
          className="productName"
          style={{
            "text-transform": "uppercase",
            letterSpacing: "2px",
            margin: "5px 0",
          }}
        >
          {props.productName}
        </h2>
        <p
          className="productType"
          style={{
            "text-transform": "capitalize",
            opacity: "0.4",
            fontSize: "24px",
          }}
        >
          {props.productType}
        </p>
        <hr
          style={{
            width: "50%",
            transform: "translateX(-50%)",
            marginTop: "25px",
          }}
        />
        <p>{props.productDescription}</p>
        <h2 className="productPrice" style={{ "text-transform": "capitalize" }}>
          {props.productPrice}/-
        </h2>
        {
          props.size.map((value) => {
            return <p className="size-varient" >{value}</p>;
          })
        }
        <br />
        <br />
        <div id="buttons_div">
        <button
          className="details-btn btn-primary"
          onClick={() => {
            dispatch(addToCart(props.value));
          }}
        >
          Add to Cart
        </button>

        <button
          className="details-btn btn-primary"
          onClick={() => {
            dispatch(addToWishlist(props.value));
          }}
        >
          Wishlist
        </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
