import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../../App';
const Header = () => {
    const [user,setUser]=useContext(LoginContext);
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/shop">Shop</NavLink>
                        <NavLink className="nav-link" to="/review">Order Review</NavLink>
                        <NavLink className="nav-link" to="/inventory">Manage Inventory Here</NavLink>
                        {user.isLoggedIn ?
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            {user.name!=='' ? user.name : user.email}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><div className="dropdown-item text-center logout-btn" onClick={()=>setUser({isLoggedIn: false,  name: "", email: "", photo: ""})}>Logout</div></li>
                            </ul>
                        </div> :
                        <NavLink className="nav-link" to="/login">Login</NavLink>}
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;