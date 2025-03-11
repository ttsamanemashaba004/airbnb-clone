import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./ListingDetails.css";
import { LocationContext } from "../../context/LocationContext";

const ListingDetails = () => {
  const { hotelData } = useContext(LocationContext);

  return (
    <div className="listing_left_details_container">
      <div className="data_detail">
        <img src={assets.house} alt="" />
        <div className="data_detail_title_subtitle">
          <span>{hotelData.type}</span>
          <span className="data_detail_subtitle">{`You’ll have the ${hotelData.type} to yourself`}</span>
        </div>
      </div>
      <div className="data_detail">
        <img src={assets.stars} alt="" />
        <div className="data_detail_title_subtitle">
          <span>{`${
            hotelData.enhanced_cleaning
              ? "Enhanced Clean"
              : "No Enchanced Clean"
          }`}</span>
          <span className="data_detail_subtitle">{`${
            hotelData.enhanced_cleaning
              ? "This Host committed to Airbnb’s 5-step enhanced cleaning process. Show more"
              : "You'll be responsible for cleaning"
          }`}</span>
        </div>
      </div>
      <div className="data_detail">
        <img src={assets.door} alt="" />
        <div className="data_detail_title_subtitle">
          <span>{`${hotelData.self_checkin ? "Self check-in" : "No Self check-in"}`}</span>
          <span className="data_detail_subtitle">{
          `${
            hotelData.self_checkin
              ? "Check yourself in with the keypad."
              : "Host will check you in"
          }`}
          </span>
        </div>
      </div>
      <div className="data_detail">
        <img src={assets.calendar} alt="" />
        <div className="data_detail_title_subtitle">
          <span>Free cancellation before Feb 14</span>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
