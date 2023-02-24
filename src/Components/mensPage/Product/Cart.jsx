import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/Reducer/data";
import "./Modal.css";
import "./Cards.css";

const Cart = () => {
	const cartData = useSelector(state => state.appData.value.cart)
	const dispatch = useDispatch();
	return (
		<>
			<div className="modal-wrapper">
				<div className="inner-head">
					<div className="flexed flex-end">Your Cart Details</div>
					<div className="right-content">
						{cartData.map((value, index) => {
							const { id, pname, product, category, imgscr, price, visible } =
								value;
							return visible ? (
								<div className="inner-card container" key={index}>
									<div className="card-wrapper">
										<div className="slider">
											<img src={imgscr} alt="" className="product-image" />
										</div>
										<div className="card-info">
											<h3 className="inner-card-category">{pname}</h3>
											<p className="inner-card-title">{product}</p>
											<p className="inner-card-price">{price}</p>
											<div className="wishlist-wrapper">
						
												<button
													className="wishlist"
													onClick={() => {
														dispatch(removeFromCart(value));
													}}
												>
													Remove from Cart
												</button>
											</div>
										</div>
									</div>
								</div>
							) : <h2>Cart is empty</h2>;
						})}
					</div>
				</div>
			</div>
		</>
	)
}
export default Cart;
