import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { getCurrentUserData } from "../Redux/Admin/Admin.action";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const {currentUserData}=useSelector((store)=>store.adminManager);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getCurrentUserData());
  },[dispatch])
  console.log("CurrentUser",currentUserData);
  if(currentUserData.isAuth===false){
   return <Navigate to='/login' state={{from:location}} replace />
  }
  return children;
};