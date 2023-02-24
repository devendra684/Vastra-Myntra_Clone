import React, { useState } from "react";
import './style.css';
import myntraLogo from "../myntra.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faSearch, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import { filter } from "../../redux/Reducer/data";
import Modal from "../Product/Wishlist"
import Cart from "../Product/Cart";
import { NavLink } from "react-router-dom";
import ProductData from "../Product/ProductData";
import { useNavigate } from "react-router-dom";

const menu = ["Men", "Women", "Kids", "Home & Living","Beauty","Studio"];

const Navbar = () => {
	const [showWishlist, setShowWishlist] = useState(false)
	const [showCart, setShowCart] = useState(false)
	const [searchParams, setSearchParams] = useState("");
	const [ data, setData] = useState([])

	const navigate = useNavigate()
	const dispatch = useDispatch()
	
	const handleSearch = (e)=>{
		setSearchParams(e.target.value)
		const searchdata = ProductData.filter((item)=>item.product == e.target.value)
		setData(searchParams)
		if(e.key ==="Enter" ){
			// console.log("enteredddd")
			selectCategory(e.target.value)
			navigate("/")
		}
		// console.log(data)
	}

	const selectCategory = (category) => {
			// console.log(category)
			dispatch(filter({type: 'search', value: category}))
	}

	const wishlistData = useSelector((state) => state.appData.value.wishlist )
	const cartData = useSelector((state) => state.appData.value.cart )
	return (
		<>
			<div className="nav" id="navbar">
				<input type="checkbox" id="nav-check" />
				<div className="nav-header">
					<div className="nav-title">
						<NavLink to="/"><img src={myntraLogo} alt="logo" height="50px" onClick={()=>window.location.href("/")}/></NavLink>
					</div>
				</div>
				<div className="nav-btn">
					<label htmlFor="nav-check">
						
					</label>
				</div>
				<div className="nav-links">
					<div className="flexed">
						{
							menu.map(item => (
								<div className="inner-content" key={item}>
									<p>{item}</p>
								</div>
							))
						}

					</div>
				</div>
				<div className="nav-search">
					<div className="border">
						<FontAwesomeIcon icon={faSearch} className="font-color" />
						<input className="padding searchbar" onKeyDown={handleSearch} onente type="search" placeholder="Search for Products, brands and more..." /> 			</div>
				</div>
				
				<div className="user-profile">
					<div className="flexed">
						{/* Profile */}
						<div className="p-r-10">
							<FontAwesomeIcon icon={faUser} className="font-color" />
							<p>Profile</p>
						</div>

						{/* Whishlist */}
						<div className="p-r-10">
							<FontAwesomeIcon icon={faHeart} className="font-color" />
							<div onClick={() => {setShowWishlist(!showWishlist)}}>Wishlist {`${wishlistData?.length > 0 ? wishlistData.length: ''}`}</div>
						</div>

						{/* Cart */}
						<div className="p-r-10">
							<FontAwesomeIcon icon={faBagShopping} className="font-color" />
							<div onClick={() => {setShowCart(!showCart)}}>cart {`${cartData?.length > 0 ? cartData.length: ''}`} </div>
						</div>
					</div>
				</div>
				{
			showWishlist && <Modal />
		}
		{
			showCart && <Cart />
		}
			</div>
		</>
	)
}

export default Navbar;
