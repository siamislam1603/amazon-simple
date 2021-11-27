import React, { useEffect, useState } from 'react';
import './Alerts.css';
const Alerts = (props) => {
    const [alertDismiss,setAlertDismiss]=useState('');
    const {type,msg}=props.alert;
    useEffect(()=>{
        setAlertDismiss('');
        setTimeout(()=>{
            setAlertDismiss(' d-none');
        },3000);
    },[msg]);
    return (
        <div className={`style-alert my-3${alertDismiss}`}>
            <div className={`alert alert-${type} mb-0`} role="alert">
                {msg}
            </div>
        </div>
    );
};

export default Alerts;