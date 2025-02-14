import { useState } from "react";
import { assets } from "../../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  const [lineOne, setLineOne] = useState(true);
  const [lineTwo, setLineTwo] = useState(false);
  const [lineThree, setLineThree] = useState(false);

  return (
    <div className="navbar_container">
      {/* Left side of navbar  */}
      <div className="left">
        <img className="logo" src={assets.airbnb_logo} alt="" />
      </div>

      {/* Middle of navbar  */}
      <div className="pages">
        <div className="page" onClick={()=>{setLineOne(true), setLineTwo(false), setLineThree(false)}}>
          <p>Places to stay</p>
          <hr className={`${lineOne ? "underline" : "hide"}`} />
        </div>
        <div className="page" onClick={()=>{setLineOne(false), setLineTwo(true), setLineThree(false)}}>
          <p>Experiences</p>
          <hr className={`${lineTwo ? "underline" : "hide"}`} />
        </div>
        <div className="page" onClick={()=>{setLineOne(false), setLineTwo(false), setLineThree(true)}}>
          <p>Online Experiences</p>
          <hr className={`${lineThree ? "underline" : "hide"}`} />
        </div>
      </div>

      {/* Left side of navbar  */}
      <div className="right">
        <p>Become a Host</p>
        <img className="globe" src={assets.globe} alt="" />
        <div className="profile">
          <img className="menu" src={assets.menu} alt="" />
          <img className="avatar" src={assets.avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
