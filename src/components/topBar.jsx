import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="logo">FINALGO</div>
            <div className="topbar-right">
                <Link to="/login" className="login-button">Login</Link>
            </div>
        </div>
    );
};

export default Topbar;
