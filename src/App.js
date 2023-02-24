import React from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import { Navbar } from './Components/Navbar/Navbar';
import { LoginOrSignUp } from './Pages/LoginOrSignUp';
//import { auth } from './Components/firebase';
// import Navbar from './Components/Navbar';
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
      <AllRoutes />
      <Navbar/>
      <LoginOrSignUp/>  
      {/* <Home/> */}
    </div>
  );
}

export default App;
