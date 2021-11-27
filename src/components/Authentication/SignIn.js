import React, { useState } from "react";
const SignIn = (props) => {
  const [validation,setValidation]=useState({email:'', password:'', emailFeedback:'', passwordFeedback:'', emailValue:'', passwordValue:''});
  const setValidations=(type,isValid,value)=>{
    const newValidation={...validation};
    newValidation[type+'Value']=value;
    if(!isValid){
      newValidation[type]=' is-invalid';
      newValidation[type+'Feedback']=' d-block';
    }
    else if(isValid==='default'){
      newValidation[type]='';
      newValidation[type+'Feedback']='';
    }
    else{
      newValidation[type]=' is-valid';
      newValidation[type+'Feedback']='';
    }
    setValidation(newValidation);
  }
  const [isLogin,setIslogin]=useState(true);
  const handleInputChange = (event) => {
    const e = event.target;
    let isValid;
    if (e.type === "email") {
      const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      isValid = re.test(String(e.value).toLowerCase());
    }
    else
      isValid=e.value.length >= 8;
    if(e.value.length===0)
      isValid='default';
    setValidations(e.type,isValid,e.value);
  };
  const handleSubmit = (e) => {
    if(validation.email===' is-valid' && validation.password===' is-valid'){
        props.handleEmailSubmit({email:validation.emailValue,password:validation.passwordValue,submitTypeLogin:isLogin});
    }
    e.preventDefault();
  };
  return (
      <form onSubmit={handleSubmit}>
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
