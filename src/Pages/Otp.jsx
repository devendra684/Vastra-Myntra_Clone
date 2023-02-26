import React, { useEffect, useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import "../css/LoginOrSignUp.css";


export const Otp = () => {
  const [OTP, setOTP] = useState("");
  console.log(OTP);

  useEffect(() => {
    if (OTP.length == 4) {
      handleFunc()
    }
  }, [OTP])

  const handleFunc = () => {
    console.log("OTP Successfully")

  }

  return (
    <div className="OTPMaster">
      <div>
        <img
          src="https://constant.myntassets.com/pwa/assets/img/3a438cb4-c9bf-4316-b60c-c63e40a1a96d1548071106233-mobile-verification.jpg"
          alt="mobile"
        />
      </div>
      <div>
        <h1>Verify With OTP</h1>
      </div>
      <div className="OTPInput">
        <OTPInput
          value={OTP}
          onChange={setOTP}
          autoFocus
          OTPLength={4}
          otpType="number"
          disabled={false}
          secure={false}
          inputStyles={{ border: "2px solid black", width: "30px", height: "40px", borderRadius: "5px", borderColor: "#ff3c6f" }}
        />
        <ResendOTP
          style={{ width: "150px", marginTop: "10px", text: "eminem" }}
          onResendClick={() => console.log("Resend clicked")}
        />
      </div>
      {/* <div className="loginProblem">
          <p>Have trouble logging in?</p>
          <h1>Get Help</h1>
        </div> */}
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
