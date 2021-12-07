import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import Alerts from "../Alerts/Alerts";
import { handleEmailSubmission } from "./handleEmailSubmission";
import { inputValidation } from "./inputValidation";
const SignIn = () => {
  const auth = getAuth();
  const [validation,setValidation]=useState({email:'', password:'', emailFeedback:'', passwordFeedback:'', emailValue:'', passwordValue:''});
  const [userEmailInfo, setUserEmailInfo] = useState({
    type: "",
    msg: "",
    email: ""
  });
  const [isLogin,setIslogin]=useState(true);
  const [showOnSubmitMsg,setShowOnSubmitMsg]=useState(false);
  const handleInputChange = (event) => {
    inputValidation([event,validation,setValidation]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(validation.email===' is-valid' && validation.password===' is-valid'){
        if (isLogin)
          handleEmailSubmission([validation.emailValue, validation.passwordValue, signInWithEmailAndPassword,userEmailInfo,setUserEmailInfo,auth,isLogin,setShowOnSubmitMsg]);
        else
          handleEmailSubmission([validation.emailValue, validation.passwordValue, createUserWithEmailAndPassword,userEmailInfo,setUserEmailInfo,auth,isLogin,setShowOnSubmitMsg]);
    }
  }
  return (
      <form onSubmit={handleSubmit}>
        {showOnSubmitMsg && <Alerts alert={[userEmailInfo.type,userEmailInfo.msg,userEmailInfo.email,setShowOnSubmitMsg]} />}
        <h1 className="text-center">{isLogin? 'Sign In' : 'Sign Up'}</h1>
        <div className="mt-5">
          <div id="email-form" className="mb-4">
            <input
              type="email"
              className={'form-control'+validation.email}
              placeholder="Email"
              aria-describedby="validationEmailFeedback"
              onChange={handleInputChange}
              required
            />
            <div
              id="validationEmailFeedback"
              className={'invalid-feedback'+validation.emailFeedback}
            >
              Please enter your valid email.
            </div>
          </div>
          <div id="password-form">
            <input
              type="password"
              className={'form-control'+validation.password}
              placeholder="password"
              aria-describedby="validationPassFeedback"
              onChange={handleInputChange}
              required
            />
            <div
              id="validationPassFeedback"
              className={'invalid-feedback'+validation.passwordFeedback}
            >
              Please enter a valid password of more than 7 in length.
            </div>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <div className="form-check d-inline-block">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={()=>setIslogin(!isLogin)}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Sign Up
              </label>
            </div>
            <input type="submit" value={isLogin ? "Sign In" : "Sign Up"} className="btn btn-primary" id="submit-btn" />
          </div>
        </div>
      </form>
  );
};

export default SignIn;
