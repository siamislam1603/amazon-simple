import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav className="navbar navbar-expand-lg navbar-black bg-black">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="/shop">Shop</a>
                        <a className="nav-link" href="/review">Order Review</a>
                        <a className="nav-link" href="/manage">Manage Inventory Here</a>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;