import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import "../Styles/LoginOrSignUp.css";
import { getData } from "./storage";
// import "../css/Home.css";

export const LoginOrSignUp = () => {
  const [details, setDetails] = useState("userdetails");
  const [buttonLogging, setButtonLogging] = useState(false);

  console.log(details);
  const navigate = useNavigate();

  const handleChange = (e) => {
    // value=e.target.value;
    setDetails(+e.target.value);
  };

  const handleSubmit = () => {
    setButtonLogging(true);
    setTimeout(() => {
      console.log("submitted");
      setButtonLogging(false);
      navigate("/fullDetails");
    }, 1000);
  };

  return (
    <div className="background">
      <Navbar />
      <div className="Login_Master">
        <div>
          <img
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg"
            alt="Error"
          />
        </div>

        <div className="form">
          <h1 className="formh1">Login / Signup</h1>
          <div className="forminput">
            <h1>+91 | </h1>
            <input
              name="phone"
              onChange={handleChange}
              type="text"
              maxlength={10}
              placeholder="Mobile Number *"
            />
          </div>

          <div className="termsAndCondition">
            <p>By continuing, I agree to the </p>
            <h1> Terms of Use </h1>
            <p> & </p>
            <h1> Privacy Policy</h1>
          </div>
          <div className="buttonFather">
            <Button
              className="logout"
              isLoading={buttonLogging}
              loadingText="Logging Out"
              colorScheme="teal"
              variant="outline"
              onClick={handleSubmit}
            >
              CONTINUE
            </Button>
          </div>

          <div className="termsAndCondition">
            <p>Have trouble logging in?</p>
            <h1>Get Help</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
