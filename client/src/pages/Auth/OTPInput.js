
import React, { useState, useContext, useEffect } from "react";
import { RecoveryContext } from "../App";
import "./global.component.css";
import axios from "axios";

export default function OTPInput() {
  const { email, otp, setPage } = useContext(RecoveryContext);
  const [OTPinput, setOTPinput] = useState( "");
  const [disable, setDisable] = useState(true);
  const [timerCount, setTimer] = useState(60);

  //function to verify OTP
  function verifyOTP() {
    if (parseInt(OTPinput) === otp) {
      setPage("reset");
    } else {
      alert("The code you have entered is not correct, try again or re-send the link");
    }
  }

  //function to resend OTP 
  function resendOTP() {
    if (disable) return;
    axios
      .post("http://localhost:5000/send_email", {
        OTP: otp,
        recipient_email: email,
      })
      .then(() => setDisable(true))
      .then(() => alert("A new OTP has succesfully been sent to your email."))
      .then(() => setTimer(60))
      .catch(console.log);

  }
  //timer function
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        return lastTimerCount - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [disable]);

  return (
    <div className="container">
      <h3>Email Verification</h3>
      <p>We have sent a verification code to your email.</p>
      <form>
         <input type="text" className="verification-input" value={OTPinput} onChange={(e) => { setOTPinput(e.target.value) }} /> 
          <button className="verify-code" onClick={() => verifyOTP()}>Verify Account</button>
                
          <a className="resend-otp" onClick={() => resendOTP()} > Didn't receive code? 
            {disable ? `Resend OTP in ${timerCount}s` : " Resend OTP"}
          </a>
             
      </form>
    </div>
  );
}
