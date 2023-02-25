import React from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import { FullDetails } from './Pages/FullDetails';
import { LoginOrSignUp } from './Pages/LoginOrSignUp';
import {Otp} from './Pages/Otp';
// import { Navbar } from './Components/Navbar/Navbar';
//import { auth } from './Components/firebase';
//import Navbar from './Components/Navbar';
//import Footer from './Components/Footer'
// import { Home } from './Pages/Home';

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
      <LoginOrSignUp/>   
      <FullDetails/>

      <Otp />
      {/* for just checking Not for pushing. */}

      {/* <AllRoutes /> */}
      {/* <Navbar/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
