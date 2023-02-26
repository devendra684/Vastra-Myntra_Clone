import React from "react";
import { Route, Routes } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import Home from "../Pages/Home";
import PageNotFound from "../Pages/PageNotFound";
import MensPage from "../Admin/MensPage";
import WomensPage from "../Admin/WomensPage";
import KidsPage from "../Admin/KidsPage";
import Product from "../Pages/Product";
import WomensProduct from "../Pages/WomensProduct";
import KidsProduct from "../Pages/KidsProduct";
import SingleProductPage from "../Pages/SingleProductPage";
import Address from "../Pages/Address";
import Wishlist from "../Pages/Wishlist";
import Cart from "../Pages/Cart";
import Payment from "../Pages/Payment";
import Success from "../Pages/Success";
import { LoginOrSignUp } from "../Pages/LoginOrSignUp";
import { FullDetails } from "../Pages/FullDetails";
import { SeeFullDetails } from "../Pages/SeeFullDetails";
import { getData } from "../Pages/storage";
import AdminDashboard from "../Admin/AdminDashboard";
import AddProductsPage from "../Admin/AddProductsPage";
import UsersPage from "../Admin/UsersPage";
import AdminProfilePage from "../Admin/AdminProfilePage";
// import { useNavigate } from "react-router-dom";

const AllRoutes = () => {
  
  const [fulldetails, setFullDetails] = useState("");
  const [buttonLogging, setButtonLogging] = useState(false);
  // const navigate = useNavigate();
  console.log(fulldetails);

  useEffect(() => {
    const getDetails = getData("details");
    setFullDetails(getDetails);
    //
  }, []);


  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Navbar />}></Route> */}
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/men" element={<Product />}></Route>
        <Route path="/women" element={<WomensProduct />}></Route>
        <Route path="/kids" element={<KidsProduct />}></Route>
        <Route path="/product/:id" element={<SingleProductPage />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/bag" element={<Cart />} ></Route>
        <Route path="/login" element={<LoginOrSignUp />} />
        <Route path="/fulldetails" element={<FullDetails />} />
        <Route path="/seeFullDetails" element={<SeeFullDetails />} />
        <Route path="/address" element={<Address />} ></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/success" element={<Success />} ></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
        <Route path="/add-products" element={<AddProductsPage />}></Route>
        <Route path="/admin-men" element={<MensPage />}></Route>
        <Route path="/admin-women" element={<WomensPage />}></Route>
        <Route path="/admin-kids" element={<KidsPage />}></Route>
        <Route path="/admin-users" element={<UsersPage />}></Route>
        <Route path="/admin-profile" element={<AdminProfilePage />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
