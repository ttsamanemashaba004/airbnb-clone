import React from "react";
import "./LoginNav.css";
import { Link } from "react-router-dom";
import { assets } from "../../../admin/src/assets/assets";

const LoginNav = () => {
  return (
    <Link  to="/">
      <div className="login-nav-container">
        <img src={assets.logo} alt="" className="nav-img" />
      </div>
    </Link>
  );
};

export default LoginNav;
