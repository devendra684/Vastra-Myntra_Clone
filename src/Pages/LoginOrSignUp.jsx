import React from "react";
import "../css/LoginOrSignUp.css";
// import "../css/Home.css";

export const LoginOrSignUp = () => {
  return (
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
          <input type="text" placeholder="Mobile Number *" />
        </div>
        <div className="termsAndCondition">
          <p>By continuing, I agree to the </p>
          <h1> Terms of Use </h1>
          <p> & </p>
          <h1> Privacy Policy</h1>
        </div>
      </div>
    </div>
  );
};
