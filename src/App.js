import React from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import { Navbar } from './Components/Navbar/Navbar';
// import { FullDetails } from './Pages/FullDetails';
// import { LoginOrSignUp } from './Pages/LoginOrSignUp';
// import {Otp} from './Pages/Otp';

function App() {
  return (
    <div className="App">
      <AllRoutes />
      <Navbar /> 
      {/* <FullDetails/> */}
      {/* <LoginOrSignUp />  */}
      {/* <Otp />  */}
    </div>
  );
}

export default App;
