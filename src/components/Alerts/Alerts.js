import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../App';
import './Alerts.css';
const Alerts = (props) => {
    const [alertDismiss,setAlertDismiss]=useState('');
    const [type,msg,email,setShowOnSubmitMsg]=props.alert;
    console.log('Alert:',type,msg,props);
    const [,setUser]=useContext(LoginContext);
    useEffect(()=>{
        setAlertDismiss('');
        setTimeout(()=>{
            setAlertDismiss(' d-none');
            setShowOnSubmitMsg(false);
            if(type==='success' && msg==='Logged in successfully.'){
                setUser({isLoggedIn: true,
                  name: "",
                  email: email,
                  photo: ""});
              }
        },3000);
    },[setShowOnSubmitMsg, type, msg,email,setUser]);
    return (
        <div className={`style-alert my-3${alertDismiss}`}>
            <div className={`alert alert-${type} mb-0`} role="alert">
                {msg}
            </div>
        </div>
    );
};

export default Alerts;