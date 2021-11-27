import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase.config";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import SignIn from "./SignIn";
import "./Authentication.css";
import Alerts from '../Alerts/Alerts';
const app = initializeApp(firebaseConfig);

const Authentication = () => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    name: "",
    email: "",
    photo: ""
  });
  const [userEmailInfo,setUserEmailInfo]=useState({loginClicked:'',type:'',msg:'',email:''});
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const handleLoginClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        const userProfile = result.user;
        setUser({
          isLoggedIn: true,
          name: userProfile.displayName,
          email: userProfile.email,
          photo: userProfile.photoURL,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleEmailSubmission = ([email, password,userEmailAuth]) => {
    typeof(userEmailInfo.loginClicked)=="boolean" && userEmailAuth(auth, email, password)
      .then((userCredential) => {
        const newUser = userCredential.user;
        const userEmail=userEmailInfo;
        userEmail.msg=userEmail.loginClicked ? 'Logged in successfully.' : 'Account created successfully'; 
        userEmail.type='success';
        userEmail.email=newUser.email;
        setUserEmailInfo(userEmail);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const userEmail={...userEmailInfo};
        userEmail.msg=errorCode;
        userEmail.type='danger';
        setUserEmailInfo(userEmail);
      });
  }
  const handleLogoutClick = () => {
    signOut(auth)
      .then(() => {
        setUser({
          isLoggedIn: false,
          name: "",
          email: "",
          photo: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleEmailSubmit=({email,password,submitTypeLogin})=>{
    const emailUser={...userEmailInfo};
    emailUser.loginClicked=submitTypeLogin;
    setUserEmailInfo(emailUser);
    if(submitTypeLogin)
        handleEmailSubmission([email,password,signInWithEmailAndPassword]);
    else
        handleEmailSubmission([email,password,createUserWithEmailAndPassword]);
  }
  const style = {
    display: "inherit",
    margin: "0px auto",
  };
  return (
    <div className="container">
      <div className="w-50 mx-auto">
          {console.log(typeof(userEmailInfo.loginClicked),userEmailInfo)}
        {typeof(userEmailInfo.loginClicked)==="boolean" && userEmailInfo.msg.length>0 && <Alerts alert={userEmailInfo}/>}
        {!user.isLoggedIn ? (
          <button
            className="btn btn-primary"
            onClick={handleLoginClick}
            style={style}
          >
            Sign In
          </button>
        ) : (
          <button
            className="btn btn-secondary"
            onClick={handleLogoutClick}
            style={style}
          >
            Sign Out
          </button>
        )}

        {user.isLoggedIn && (
          <p>
            <h3 className="text-center">user name: {user.name}</h3>
            <h4 className="text-center">email: {user.email}</h4>
            <img
              src={user.photo}
              className="rounded mx-auto d-block"
              alt=""
            ></img>
          </p>
        )}
        <SignIn handleEmailSubmit={handleEmailSubmit}></SignIn>
        <div
          style={{ borderBottom: "1px dotted silver" }}
          className="my-3"
        ></div>
        <p>Or Sign Up with -</p>
        <div className="d-flex justify-content-center">
          <i className="bi bi-google btn btn-danger"></i>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
