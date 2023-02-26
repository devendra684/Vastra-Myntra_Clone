import { Button, FormControl, FormLabel} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { getData, saveData } from "./storage";
import "../Styles/LoginOrSignUp.css";

export const SeeFullDetails = () => {
  const [fulldetails, setFullDetails] = useState({});
  const [buttonLogging, setButtonLogging] = useState(false);
  const navigate = useNavigate();
  const full = getData("details") || {};
  const status = full.status;
  //   console.log(status)
  console.log(full);

  console.log(fulldetails);

  useEffect(() => {
    const getDetails = getData("details") || {};
    setFullDetails(getDetails);
    //
  }, []);

  const handleLogout = () => {
    setButtonLogging(true);
    setTimeout(() => {
      console.log("hua kuchh");
      setButtonLogging(false);
      saveData("details",{})
      navigate("/");
    }, 1000);
  };

  if (!status) {
    return navigate("/login");
  }

  return (
    <div>
      <div>
        <Navbar />
        <div className="Login_Master">
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg"
              alt="Error"
            />
          </div>

          <div className="form">
            <h1 className="formh1">Hi, Mr/Mrs :{fulldetails.name}</h1>
            <div>
              <FormControl>
                <FormLabel style={{ fontSize: "20px" }}>
                  Name: {fulldetails.name}
                </FormLabel>
              </FormControl>
              <FormControl>
                <FormLabel style={{ fontSize: "20px" }}>
                  Email: {fulldetails.email}
                </FormLabel>
              </FormControl>
              <FormControl>
                <FormLabel style={{ fontSize: "20px" }}>
                  Phone: {fulldetails.phone}{" "}
                </FormLabel>
              </FormControl>
              <FormControl>
                <FormLabel style={{ fontSize: "20px" }}>
                  Password: **********{" "}
                </FormLabel>
              </FormControl>
            </div>
            <div className="buttonFather">
              <Button
                className="logout"
                isLoading={buttonLogging}
                loadingText="Logging Out"
                colorScheme="teal"
                variant="outline"
                onClick={handleLogout}
              >
                LogOut ?
              </Button>
            </div>

            <div className="termsAndCondition">
              <p>Have you need of anything?</p>
              <h1>Get Help</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
