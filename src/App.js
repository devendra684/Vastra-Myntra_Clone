import React from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import { Navbar } from './Components/Navbar/Navbar';
import { FullDetails } from './Pages/FullDetails';
import { LoginOrSignUp } from './Pages/LoginOrSignUp';
import {Otp} from './Pages/Otp';
// import { Navbar } from './Components/Navbar/Navbar';
//import { auth } from './Components/firebase';
// import Navbar from './Components/Navbar';
//import Footer from './Components/Footer'
// import { Home } from './Pages/Home';
// import  Stylesss  from '../src/Components/mensPage/ProductItemCss/style'

function App() {
  // const [userName, setUserName]=useState("");
  // useEffect(()=>{
  //   auth.onAuthStateChanged((user)=>{
  //     if(user){
  //       setUserName(user.displayName)
  //       console.log(user.displayName)
  //     }else{
  //       setUserName("")
  //     }
  //   })

  // },[])
  return (
    <div className="App">
      <AllRoutes />
      <Navbar />
      <LoginOrSignUp/>   
      <FullDetails/>
      <Otp />
      {/* <Home/> */}
      {/* <Stylesss/> */}
    </div>
  );
}

export default App;
