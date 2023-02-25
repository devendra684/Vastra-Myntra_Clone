import React from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer'
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

      <AllRoutes />
      {/* <Navbar/>
      <Footer/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
