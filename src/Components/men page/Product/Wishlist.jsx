import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromWishList } from "../../redux/Reducer/data";
import style from "./Modal.css";
import Cards from "./Cards.css";
import { NavLink } from "react-router-dom";


const Modal = () => {
  const wishlistData = useSelector((state) => state.appData.value.wishlist);
  const dispatch = useDispatch();
  //  removeFromWishList
  return (
    <>
      <div className="modal-wrapper" id="modalwrapper">
       <div className="modal">
	   <div className="inner-head">
          <div className="flexed flex-end">Wishlist</div>
          <div className="right-content">
            {wishlistData.map((value, index) => {
              const { id, pname, product, category, imgscr, price, visible } =
                value;
              var linkto = "/details/" + id;
              return visible ? (
                <div className="container inner-card" key={index}>
                  <div className="card-wrapper">
                    <div className="slider">
                      <NavLink to={linkto}>
                        <img src={imgscr} alt="" className="inner-product-image" />
                      </NavLink>
                    </div>
                    <div className="inner-card-info">
                      <h3 className="inner-card-category">{pname}</h3>
                      <p className="inner-card-title">{product}</p>
                      <p className="inner-card-price">{price}</p>
                      <div className="wishlist-wrapper">
                        <button
                          className="wishlist"
                          onClick={() => {
                            dispatch(addToCart(value));
                          }}
                        >
                          Add to Cart
                        </button>
                        <br />
                        <button
                          className="wishlist"
                          onClick={() => {
                            dispatch(removeFromWishList(value));
                          }}
                        >
                          Remove from Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </div>
	   </div>
      </div>
    </>
  );
};

export default Modal;
