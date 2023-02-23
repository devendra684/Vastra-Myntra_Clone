import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
import { BeautyNav } from './Beauty'
import { WomenNav } from './Women'
import { KidsNav } from './Kids'
import { HomeLivingNav } from './Home&Living'
import { MenNav } from './Men'
import { StudioNav } from './Studio'

// import { useAuth } from "../../Context/AuthContext";

const Div = styled.nav`
   position: fixed;
   display: flex;
   padding: 5px 10px;
   width: 100%;
   /* height: 70px; */
   top: 0;
   margin-left: 5%;
   right: 0;
   z-index: 1;
   align-items: center;
   background-color: #fffffe;
   box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 80px 60px rgba(0, 0, 0, 0.1);
`;

export const Navbar = () => {
   // const { currentUser, logout } = useAuth();

   return (
      <>
         <Div>
            <Link className="link1" to="/">
               <img
                  style={{
                     width: "75%",
                     height: "50px",
                     marginLeft: "30%",
                     // marginRight: "30%",
                  }}
                  src="logoV.jpeg"
                  alt=""
               />
            </Link>

            <div className="link1">
               <NavLink
                  className="link men"
                  style={{
                     marginLeft: "3%",
                     fontWeight: "bold",
                     fontSize: "14px",
                     textDecoration: "none",
                     color: "#282C3F",
                     paddingBottom: "10px",
                     paddingLeft: "20px",
                     paddingRight: "5px",
                     //   hoverBorderBottom:"5px solid #ee5f73"
                  }}
                  to="/men"
               >
                  MEN
               </NavLink>
               <MenNav></MenNav>
            </div>

            <div className="link1">
               <NavLink
                  className="link women"
                  style={{
                     marginLeft: "3%",
                     marginBottom: "-2%",
                     fontWeight: "bold",
                     fontSize: "14px",
                     textDecoration: "none",
                     color: "#282C3F",
                     paddingBottom: "10px",
                     paddingLeft: "5px",
                     paddingRight: "5px",
                  }}
                  to="/women"
               >
                  WOMEN
               </NavLink>
               <WomenNav></WomenNav>
            </div>

            <div className="link1">
               <Link
                  className="link kids"
                  style={{
                     marginLeft: "3%",
                     fontWeight: "bold",
                     fontSize: "14px",
                     textDecoration: "none",
                     color: "#282C3F",
                     paddingBottom: "10px",
                     paddingLeft: "5px",
                     paddingRight: "5px",
                     marginBottom: "-2%",
                  }}
                  to="/kids"
               >
                  KIDS
               </Link>
               <KidsNav></KidsNav>
            </div>

            {/* <Link style={{ marginLeft: "2%", fontWeight: "bold", fontSize: "17px", textDecoration: "none", color: '#282C3F' }} to="/homeandkitchen">Home & Living</Link> */}

            <div className="link1">
               <Link
                  className="link home"
                  style={{
                     //   marginLeft: "3%",
                     fontWeight: "bold",
                     fontSize: "14px",
                     textDecoration: "none",
                     color: "#282C3F",
                     paddingBottom: "10px",
                     paddingLeft: "5px",
                     paddingRight: "5px",
                     marginBottom: "-2%",
                  }}
                  to="/home&living"
               >
                  HOME & LIVING
               </Link>
               <HomeLivingNav></HomeLivingNav>
            </div>

            <div className="link1">
               <Link
                  className="link beauty"
                  style={{
                     marginLeft: "3%",
                     fontWeight: "bold",
                     fontSize: "14px",
                     textDecoration: "none",
                     color: "#282C3F",
                     paddingBottom: "10px",
                     paddingLeft: "5px",
                     paddingRight: "5px",
                     marginBottom: "-2%",
                  }}
                  to="/Beauty"
               >
                  BEAUTY
               </Link>
               <BeautyNav />
            </div>

            <div className="link1">
               <Link
                  className="link studio"
                  style={{
                     marginLeft: "3%",
                     fontWeight: "bold",
                     fontSize: "14px",
                     textDecoration: "none",
                     color: "#282C3F",
                     paddingBottom: "10px",
                     paddingLeft: "5px",
                     paddingRight: "5px",
                     marginBottom: "-2%",
                  }}
                  to="/Studio"
               >
                  STUDIO
               </Link>
               <StudioNav></StudioNav>
            </div>

            {/* <p className="nw">NEW</p> */}

            <div className="inp1">
               <input
                  type="text"
                  className="inp"
                  placeholder="Search for products, brands and more"
               />
            </div>

            <p style={{ marginLeft: "4%", cursor: "pointer" }}>
               <img
                  style={{ marginLeft: "15%", fontSize: "12px", width: "20px" }}
                  src="https://cdn-icons-png.flaticon.com/512/3106/3106773.png"
                  alt=""
               />
               <br></br>
               <span >
                  {/* {" "}
                  {currentUser ? (
                     <Link onClick={logout} to={"/"} className="rightLink" >
                      Logout
                     </Link>
                  ) : ( */}
                  <Link to={"/login"} className="rightLink">Profile</Link>
                  {/* )} */}
               </span>
            </p>

            <p style={{ marginLeft: "2%", cursor: "pointer" }}>
               <img
                  style={{ marginLeft: "15%", fontSize: "12px", width: "20px" }}
                  src="https://cdn-icons-png.flaticon.com/512/7299/7299761.png"
                  alt=""
               />
               <br></br>
               <span>
                  <Link to={"/wishlist"} className="rightLink">Wishlist</Link>
               </span>
            </p>

            <Link
               style={{
                  marginLeft: "2%",
                  fontSize: "15px",
                  textDecoration: "none",
                  color: "#282C3F",
               }}
               // to="/cart"
               to="/bag"
            >
               {" "}
               <p style={{ marginLeft: "2%", cursor: "pointer" }}>
                  <img
                     style={{ marginLeft: "15%", fontSize: "12px", width: "20px" }}
                     src="https://cdn-icons-png.flaticon.com/512/1174/1174408.png"
                     alt=""
                  />
                  <br></br>
                  <span className="rightLink">Bag</span>
               </p>
            </Link>
         </Div>
      </>
   );
};