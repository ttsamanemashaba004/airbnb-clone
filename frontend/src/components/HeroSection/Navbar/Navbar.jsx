import { assets } from "../../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
{/* Left side of navbar  */}
      <div className="left">
        <img className="logo" src={assets.airbnb_logo} alt="" />
      </div>

{/* Middle of navbar  */}
      <div className="pages">
        <div className="page">
          <p>Places to stay</p>
          <hr className="underline" />
        </div>
        <div className="page">
          <p>Experiences</p>
          <hr className="underline" />
        </div>
        <div className="page">
          <p>Online Experiences</p>
          <hr className="underline" />
        </div>
      </div>

{/* Left side of navbar  */}
      <div className="right"></div>
    </div>
  );
};

export default Navbar;
