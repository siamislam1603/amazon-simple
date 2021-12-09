import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { LoginContext } from '../../App';
import { Alert } from 'react-bootstrap';
const Shipment = () => {
    const [user,]=useContext(LoginContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showAlert,setShowAlert]=useState(false);
    const onSubmit = data => {
        console.log(data);
        setShowAlert(!showAlert);
    }
    const makeAlertVisible=()=>{
        return <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
            Your shipment information was submitted successfully.
        </Alert>;
    }
    return (
        <div className="container w-50 mt-3">
            {showAlert && makeAlertVisible()}
            <h4 className="text-center my-3">Shipment Information</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3">
                    <span className="input-group-text">User Name</span>
                    <input className="form-control" defaultValue={user.name} placeholder="Enter User Name" {...register("name", { required: true })} />
                    {errors.name && <span>Username is required</span>}
                </div>
            <div className="input-group mb-3">
                    <span className="input-group-text">User Email</span>
                    <input className="form-control" defaultValue={user.email} placeholder="Enter User Name" {...register("email", { required: true })} />
                    {errors.email && <span>Email is required</span>}
                </div>
            
            <div className="input-group mb-3">
                    <span className="input-group-text">Phone Number</span>
                    <input className="form-control" placeholder="Enter your phone number" {...register("phone", { required: true })} />
                    {errors.phone && <span>Phone number is required</span>}
                </div>
            <div className="input-group mb-3">
                    <span className="input-group-text">Address</span>
                    <input className="form-control" defaultValue={user.address} placeholder="Enter your address" {...register("address", { required: true })} />
                    {errors.address && <span>Address is required</span>}
                </div>
            <input type="submit" className='btn btn-primary'/>
            </form>
        </div>
  );
};

export default Shipment;