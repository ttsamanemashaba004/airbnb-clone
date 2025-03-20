import React from "react";
import "./Navbar.css";
import { assets } from "../assets/assets";
import { Link} from 'react-router-dom'

const Navbar = ({setToken}) => {
  return (
    <div className="airbnb_nav_container">
      <div className="airbnb_nav_top">
        <img src={assets.logo} alt="" />
        <div className="airbnb_nav_top_right">
          <span className="text-top">John Doe</span>
          <div className="profile_drop_down" onClick={()=>setToken('')}>
            <img src={assets.menu} alt="" />
            <img src={assets.profile} alt="" />
          </div>
        </div>
      </div>
      <div className="airbnb_nav_filter">
        <Link to='/reservations'>
          <button className="filer-button">View Reservations</button>
        </Link>
        <Link to='listings'>
          <button className="filer-button">View Listings</button>
        </Link>
        <Link to='/create'>
          <button className="filer-button">Create Listing</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
