import { Link } from "react-router-dom";
import { assets } from "../../../../assets/assets";
import AirbnbSearchLocation from "./AirbnbSearchLocation";
import "./LocationsAirbnbNav.css";

const LocationsAirbnbNav = () => {
  return (
    <div className="locationsAirbnb_container">
      <div className="red_logo">
        <Link to="/">
          <img src={assets.red_logo} alt="" />
        </Link>
      </div>

      <AirbnbSearchLocation />
      <div className="right_standard_search">
        <p>Become a Host</p>
        <img className="globe" src={assets.globe3} alt="" />
        <div className="profile">
          <img className="menu" src={assets.menu2} alt="" />
          <img className="avatar" src={assets.avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LocationsAirbnbNav;
