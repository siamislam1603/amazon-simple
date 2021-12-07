import React, { createContext, useState } from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase.config";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut
} from "firebase/auth";
import SignIn from "./SignIn";
import "./Authentication.css";
const app = initializeApp(firebaseConfig);
export const AuthenticationContext = createContext();
const facebookProvider = new FacebookAuthProvider();
const Authentication = () => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    name: "",
    email: "",
    photo: ""
  });
  const setUserInfo=(userProfile)=>{
    setUser({
      isLoggedIn: true,
      name: userProfile.displayName,
      email: userProfile.email,
      photo: userProfile.photoURL,
    });
  }
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const handleFacebookSignUpClick=()=>{
    signInWithPopup(auth, facebookProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      setUserInfo(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }
  const handleGoogleSignUpClick = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        const userProfile = result.user;
        setUserInfo(userProfile);
      })
      .catch((error) => {
        console.log(error);
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
  const style = {
    display: "inherit",
    margin: "0px auto"
  };
  return (
    <AuthenticationContext.Provider value={[setUser]}>
      <div className="container">
        <div className="w-50 mx-auto">
          {!user.isLoggedIn ? (
            <div>
              <SignIn></SignIn>
              <p className='text-center mt-4'>Or Sign Up with -</p>
              <div
                style={{ borderBottom: "1px dotted silver" }}
                className="my-3"
              ></div>
              <div className="d-flex justify-content-center">
                <div>
                  <i className="bi bi-google btn btn-danger" onClick={handleGoogleSignUpClick}></i>
                  <i className="bi bi-facebook btn btn-primary" onClick={handleFacebookSignUpClick} style={{marginLeft:'10px'}}></i>
                </div>
              </div>
            </div>
          ) : (
            <button
              className="btn btn-secondary my-2"
              onClick={handleLogoutClick}
              style={style}
            >
              Sign Out
            </button>
          )}

          {user.isLoggedIn && (
            <div>
              <h3 className="text-center">user name: {user.name}</h3>
              <h4 className="text-center">email: {user.email}</h4>
              <img
                src={user.photo}
                className="rounded mx-auto d-block"
                alt=""
              ></img>
            </div>
          )}
        </div>
      </div>
    </AuthenticationContext.Provider>
  );
};

export default Authentication;
