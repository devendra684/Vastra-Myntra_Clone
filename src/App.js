import './App.css';
import AllRoutes from './Components/AllRoutes';
//import { auth } from './Components/firebase';
//import Navbar from './Components/Navbar';
//import Footer from './Components/Footer'


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
    </div>
  );
}

export default App;
