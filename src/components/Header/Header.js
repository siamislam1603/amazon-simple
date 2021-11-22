import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { NavLink } from 'react-router-dom';
const Header = () => {
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
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;