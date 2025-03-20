import { Link } from "react-router-dom";
import { assets } from "../../../../assets/assets";
import AirbnbSearchLocation from "./AirbnbSearchLocation";
import "./LocationsAirbnbNav.css";
import { useContext } from "react";
import { LocationContext } from "../../../../context/LocationContext";

const LocationsAirbnbNav = () => {

  const adminUrl = 'https://airbnb-clone-admin.vercel.app/';
  const {
    setSelectedHotel,
    setGuests,
    setCheckInDate,
    setCheckOutDate,navigate, token, setToken,
    setFormatDateRange,
  } = useContext(LocationContext);

  const clearSearchData = () => {
    localStorage.removeItem("selectedHotel"), localStorage.removeItem("guests");
    localStorage.removeItem("dateRange");
    setSelectedHotel("");
    setGuests("");
    setCheckInDate("");
    setCheckOutDate("");
    setFormatDateRange("");
  };



  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <div className="locationsAirbnb_container">
      <div className="red_logo" onClick={() => clearSearchData()}>
        <Link to="/">
          <img src={assets.red_logo} alt="" />
        </Link>
      </div>

      <AirbnbSearchLocation />
      <div className="right_standard_search">
        <p onClick={() => window.location.href = adminUrl}>Become a Host</p>
        <img className="globe" src={assets.globe3} alt="" />
        <div className="profile group rel" onClick={() => token ? null : navigate('/login') }>
          <img className="menu" src={assets.menu} alt="" />
          <img className="avatar" src={assets.avatar} alt="" />
          <div className="group-hover:block hidden absolute dropdown-menu right-24 pt-4 top-24 ">
            <div className="flex flex-col gap-2 w-36 py-3 px-5  bg-slate-200 text-black rounded">
              <p className="cursor-pointer hover:text-black" style={{ color: 'black' }} onClick={logout}>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsAirbnbNav;
