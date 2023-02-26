import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import "../Styles/LoginOrSignUp.css";
import { saveData } from "./storage";

const useDetails = {
  name: "",
  email: "",
  phone: "",
  password: "",
  status: false,
};

export const FullDetails = () => {
  const [fulldetails, setFullDetails] = useState(useDetails);
  const [buttonLogging, setButtonLogging] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFullDetails({ ...fulldetails, [e.target.name]: e.target.value });
  };
  console.log(fulldetails);

  const handleSubmit = () => {
    setButtonLogging(true);
    setTimeout(() => {
      console.log(fulldetails, "okay");
      saveData("details", { ...fulldetails, status: true });
      setButtonLogging(false);
      navigate("/");
    }, 1000);
  };

  return (
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
          <h1 className="formh1">Please Enter Your Full Details Here:</h1>
          <div>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input name="name" onChange={handleChange} type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input name="email" onChange={handleChange} type="email" />
            </FormControl>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input name="phone" onChange={handleChange} type="email" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input name="password" onChange={handleChange} type="password" />
            </FormControl>
          </div>
          <div className="buttonFather">
            <Button
              className="button"
              isLoading={buttonLogging}
              loadingText="Submitting..."
              colorScheme="#ff3c6f"
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
