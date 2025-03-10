import { useContext } from "react";
import "./TopContentListing.css";
import { LocationContext } from "../../context/LocationContext";
import { assets } from "../../assets/assets";

const TopContentListing = () => {
  const { hotelData } = useContext(LocationContext);
  return (
    <div className="top_content_listing">
      <div className="top_content_Header">
        <div className="top_content_title">
          <span className="title">
            {hotelData.type} hosted by {hotelData.host}
          </span>
          <div className="top_content__title-left">
            <span className="text">{hotelData.guests} guests</span>
            <div className="ellipse"></div>
            <span className="text">{hotelData.bedrooms} bedroom</span>
            <div className="ellipse"></div>
            <span className="text">{hotelData.bedrooms} bed</span>
            <div className="ellipse"></div>
            <span className="text">{hotelData.bathrooms} bath</span>
          </div>
        </div>
        <div className="avatar">
            <img src={assets.avatar2} alt="" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TopContentListing;
