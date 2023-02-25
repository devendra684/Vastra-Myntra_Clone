import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import React, { useState } from "react";
import "../css/LoginOrSignUp.css";
import { saveData } from "./storage";

const useDetails = {
  name: "",
  email: "",
  phone: "",
};

export const FullDetails = () => {
  const [fulldetails, setFullDetails] = useState(useDetails);

  const handleChange = (e) => {
    setFullDetails({ ...fulldetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log(fulldetails, "okay");
    saveData("details", fulldetails);
  };
  console.log(fulldetails);
  return (
    
    <div className="Login_Master">
        FUll Details
      <div>
        <img
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg"
          alt="Error"
        />
      </div>

      <div className="form">
        <h1 className="formh1">Details dala bhaiya jee</h1>
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
          <button onClick={handleSubmit} className="button">
            CONTINUE
          </button>
        </div>

        <div className="termsAndCondition">
          <p>Have trouble logging in?</p>
          <h1>Get Help</h1>
        </div>
      </div>
    </div>
  );
};
