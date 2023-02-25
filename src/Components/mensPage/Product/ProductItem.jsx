import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToWishlist } from "../../../Redux/mensPage/Reducer/data";

const ProductItem = () => {

    const [hover, setHover] = React.useState(false)
    const productData = useSelector((state) => state.appData.value.data)
    // console.log(productData)
    const dispatch = useDispatch();
    return (
        <>
            <div className="container left-content-border">
                <div className="right-content">
                    {
                        productData.map((value, index) => {
                            
                            const { id, pname, product, category, imgscr,img2, price, visible } = value;
                            
                            {/* console.log(visible) */}
                            let linkto = "/details/" + id;
                            
                            return visible ?
                                (

                                    <div  className="cards"  key={index} onMouseOver={()=>setHover(true)}>
                                        <div className="card">
                                            <div className="slider">
                                                <NavLink to={linkto}>
                                                    <img src={imgscr} alt="Unable to load image" className="product-image" />
                                                </NavLink>
                                            </div>
                                            <div className="card-info">
                                                <div className="flexed">
                                                {/* <h1>yess</h1> */}
                                                    <div className="card-category">{pname}</div>
                                                    <div className="similar p-r">
                                                        <FontAwesomeIcon icon={faBox} />
                                                    </div>
                                                </div>
                                                <p className="card-title">{product}</p>
                                                <p className="card-price">Rs {price}</p>

                                                {
                                                    hover ? <div className="wishlist-wrapper">
                                                        <button className="wishlist" onClick={() => { dispatch(addToWishlist(value)) }}> Add to Wishlist </button>
                                                    </div> : null
                                                    
                                                }
                                            </div>
                                        </div>
                                        {

                                        }
                                    </div>
                                ) : null
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProductItem;
