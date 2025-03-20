import { useState, useContext } from "react";
import { assets } from "../../../assets/assets";
import "./Navbar.css";
import { LocationContext } from "../../../context/LocationContext";

const Navbar = () => {
  const [lineOne, setLineOne] = useState(true);
  const [lineTwo, setLineTwo] = useState(false);
  const [lineThree, setLineThree] = useState(false);

  const adminUrl = 'https://airbnb-clone-admin.vercel.app/';

  const { navigate, token, setToken } = useContext(LocationContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <div className="navbar_container">
      {/* Left side of navbar  */}
      <div className="left">
        <img className="logo" src={assets.airbnb_logo} alt="" />
      </div>

      {/* Middle of navbar  */}
      <div className="pages">
        <div
          className="page"
          onClick={() => {
            setLineOne(true), setLineTwo(false), setLineThree(false);
          }}
        >
          <p>Places to stay</p>
          <hr className={`${lineOne ? "underline" : "hide"}`} />
        </div>
        <div
          className="page"
          onClick={() => {
            setLineOne(false), setLineTwo(true), setLineThree(false);
          }}
        >
          <p>Experiences</p>
          <hr className={`${lineTwo ? "underline" : "hide"}`} />
        </div>
        <div
          className="page"
          onClick={() => {
            setLineOne(false), setLineTwo(false), setLineThree(true);
          }}
        >
          <p>Online Experiences</p>
          <hr className={`${lineThree ? "underline" : "hide"}`} />
        </div>
      </div>

      {/* Right side of navbar  */}
      <div className="right">
        <p onClick={() => window.location.href = adminUrl}>Become a Host</p>
        <img className="globe" src={assets.globe} alt="" />
        <div
          className="profile group rel"
          onClick={() => (token ? null : navigate("/login"))}
        >
          <img className="menu" src={assets.menu} alt="" />
          <img className="avatar" src={assets.avatar} alt="" />
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-24 pt-4 top-14 ">
              <div className="flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-black rounded">
                <p
                  className="cursor-pointer hover:text-black"
                  style={{ color: "black" }}
                  onClick={logout}
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
