import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="logo">FINALGO</div>
            <div className="topbar-right">
                <Link to="/profile">
                    <img 
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
                        alt="Profile" 
                        className="profile-image"
                    />
                </Link>
                <Link to="/login" className="login-button">Login</Link>
            </div>
        </div>
    );
};

export default Topbar;
