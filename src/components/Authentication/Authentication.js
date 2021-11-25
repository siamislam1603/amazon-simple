import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut  } from "firebase/auth";
const app = initializeApp(firebaseConfig);


const Authentication = () => {
    const [user,setUser]=useState({
        isLoggedIn:false,
        name:'',
        email:'',
        photo:''
    });
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const handleLoginClick=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            const userProfile=result.user;
            setUser({
                isLoggedIn:true,
                name:userProfile.displayName,
                email:userProfile.email,
                photo:userProfile.photoURL
            });
        }).catch((error) => {
            console.log(error);
        });
    }
    const handleLogoutClick=()=>{
        signOut(auth).then(() => {
            setUser({
                isLoggedIn:false,
                name:'',
                email:'',
                photo:''
            });
          }).catch((error) => {
            console.log(error);
          });
    }
    const style={
        display:'inherit',
        margin:'0px auto'
    };
    return (
        <div>
            {
                !user.isLoggedIn ? <button className="btn btn-primary" onClick={handleLoginClick} style={style}>Sign In</button> :
                <button className="btn btn-secondary" onClick={handleLogoutClick} style={style}>Sign Out</button>
            }
            
            {
                user.isLoggedIn && <p>
                    <h3 className="text-center">user name: {user.name}</h3>
                    <h4 className="text-center">email: {user.email}</h4>
                    <img src={user.photo} className="rounded mx-auto d-block" alt=""></img>
                    </p>
            }
        </div>
    );
};

export default Authentication;